const request = require('request');
const cheerio = require('cheerio');

request({
    method: 'GET',
    url: 'https://www.youtube.com/watch?v=Dk0axPbD2pc'

}, (err, res, html) => {

    if (err) return console.error(err);

});


/*$(document).ready(function() {

    $('#modal1').modal();



});*/
