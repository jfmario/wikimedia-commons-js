
var cheerio = require ( 'cheerio' );
var download = require ( '../utils/download' );
var fs = require ( 'fs' );
var path = require ( 'path' );
var request = require ( 'request' );
var urls = require ( '../data/urls' );

this.wikimediaCommons = {
    getDailyFeaturedPicture: function ( outFile )
    {

        var url = urls.wikimediaCommonsFeaturedPictureUrl;

        request ( url, function ( error, response, html )
        {
            if ( !error )
            {

                var $ = cheerio.load ( html );
                $ ( '.floatright' ).filter ( function ()
                {

                    var data = $ ( this );
                    // table
                    var element = data.children ().first ();

                    // tr n=3
                    var descriptionTR = element.children ().first ().next ().next ();
                    var descriptionTD = descriptionTR.children ().first ();
                    var descriptionSpan = descriptionTD.children ().first ();
                    var description = descriptionSpan.text ();
                    fs.writeFileSync ( path.resolve ( __dirname,
                        '..', 'output', 'image_desc.txt' ),
                        description );

                    // tr n=2
                    element = element.children ().first ().next ();
                    // td
                    element = element.children().first ();
                    // a
                    element = element.children ().first ();
                    var imgHref = element.attr ( 'href' );

                    // get geo information
                    request ( urls.wikimediaCommonsUrl + imgHref, function ( err, res, h )
                    {
                        if ( !err )
                        {
                            var $1 = cheerio.load ( h );
                            $1 ( '.geo' ).filter ( function ()
                            {
                                var geoElement = $1 ( this );
                                var geoData = geoElement.text ();
                                fs.writeFileSync ( path.resolve ( __dirname,
                                    '..', 'output', 'image_geo.txt' ),
                                    geoData );
                            });
                        }
                    });

                    // img
                    element = element.children ().first ();
                    var featuredImgLink = element.attr ( 'src' );

                    featuredImgLink = featuredImgLink.replace ( /thumb\//,
                        '');
                    featuredImgLink = featuredImgLink.replace ( /\.(jpg)\/.+/i,
                        '.$1' );
                    console.log ( featuredImgLink );
                    fs.writeFileSync ( path.resolve ( __dirname, '..',
                        'output', 'image_link.txt' ), featuredImgLink );
                    var imgExt = featuredImgLink.split ( '.' ).pop ();
                    download ( featuredImgLink,
                        outFile, function ()
                        { console.log ( 'ok ') });
                });
            }
            else
            {
                console.err ( error );
            }
        })
    }
}
