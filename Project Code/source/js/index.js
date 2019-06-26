src="https://code.jquery.com/jquery-2.1.1.min.js";


document.getElementById("about-button").addEventListener("click", scrolltoAbout)

function scrolltoAbout() {
    document.getElementById("about-trism").scrollTo();
    document.get('about-trism').scrollIntoView({
        behavior: 'smooth'
    });
}

$(document).ready(function(){
    $('.modal').modal();
});
