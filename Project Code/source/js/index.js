

document.getElementById("about-button").addEventListener("click", scrolltoAbout)

function scrolltoAbout() {
    document.getElementById("about-trism").scrollTo();
    document.get('about-trism').scrollIntoView({
        behavior: 'smooth'
    });
}