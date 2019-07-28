$(document).ready(function(){

    document.write("Placeholder Testing")

    var osmosis = require('osmosis');

    var url = 'https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844/ref=zg_bs_491298_1?_encoding=UTF8&psc=1&refRID=4VBHQN1B11GJWRKSYH7H';

    osmosis
        .get(url)
        .set({
            heading: 'h1'
        })
        .data(item => console.log(item));

});
