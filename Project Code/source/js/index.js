

var regBtn= document.getElementById('regBtn');
var loginBtn= document.getElementById('loginBtn');

$(document).ready(function() {
    $('#regBtn').click(function() {
      console.log("Reg pressed");
      document.getElementById('register-form').style.display='block';
    });
  });

  $(document).ready(function() {
    $('#loginBtn').click(function() {
      console.log("Login pressed");
      document.getElementById('login-form').style.display='block';
    });
  });

/*document.getElementById("about-button").addEventListener("click", scrolltoAbout)

function scrolltoAbout() {
    document.getElementById("about-trism").scrollTo();
    document.get('about-trism').scrollIntoView({
        behavior: 'smooth'
    });
}*/

