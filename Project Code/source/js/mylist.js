/* $(document).ready(function() {
    $('#modal1').modal();
});

const request = require('request');
const cheerio = require('cheerio');

let url = 'https://www.coursera.org/learn/algorithms-part1';

request({
    method: 'GET',
    url: url

}, (err, res, html) => {

    if (err) return console.error(err);

    let $ = cheerio.load(html);
    let title = $('title').text();

    if (url.search('coursera')) {

        var pos = title.indexOf("Coursera");
        var trimmed_title = title.slice(0, pos+8);
        console.log(trimmed_title);
        document.write(trimmed_title);

    } else {

        console.log(title);

        document.write(title);

    }

}); */
