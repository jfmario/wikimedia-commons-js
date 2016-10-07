
var path = require ( 'path' );
var getter = require ( './lib/getter' );
var args = process.argv.slice ( 2 );

if ( args.shift () == 'dailypic' )
{
    getter.wikimediaCommons.getDailyFeaturedPicture (
        path.resolve ( __dirname, 'output', 'latest.jpg' ) );
}

this.dailypic () = function ()
{
    getter.wikimediaCommons.getDailyFeaturedPicture (
        path.resolve ( __dirname, 'output', 'latest.jpg' ) );
};
