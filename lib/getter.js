
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

                    // tr n=2
                    element = element.children ().first ().next ();
                    // td
                    element = element.children().first ();
                    // a
                    element = element.children ().first ();
                    // img
                    element = element.children ().first ();
                    var featuredImgLink = element.attr ( 'src' );

                    featuredImgLink = featuredImgLink.replace ( /thumb\//,
                        '');
                    featuredImgLink = featuredImgLink.replace ( /\.jpg\/.+/,
                        '.jpg' );
                    console.log ( featuredImgLink );
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
