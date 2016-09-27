
var download = require ( '../utils/download' );

download ( 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Alte_Bibliothek%2C_Bebelplatz%2C_Berlin-Mitte%2C_150926%2C_ako.jpg',
    'latest.jpg', function ()
    { console.log ( 'ok ') });

/**
https://upload.wikimedia.org/wikipedia/commons/1/1f/Alte_Bibliothek%2C_Bebelplatz%2C_Berlin-Mitte%2C_150926%2C_ako.jpg
https://upload.wikimedia.org/wikipedia/commons/1/1f/Alte_Bibliothek%2C_Bebelplatz%2C_Berlin-Mitte%2C_150926%2C_ako.jpg
*/
