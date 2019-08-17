

var regBtn= document.getElementById('regBtn');
var loginBtn= document.getElementById('loginBtn');
var closeBtnReg= document.getElementsByClassName('closeBtn')[0];
var closeBtnLogin= document.getElementsByClassName('closeBtn')[1];

$(document).ready(function() {
    $('#regBtn').click(function() {
      console.log("Reg pressed");
      document.getElementById('register-form').style.display='block';
    });

    $('#loginBtn').click(function() {
      console.log("Login pressed");
      document.getElementById('login-form').style.display='block';
    });

    closeBtnReg.onclick = function() {
      console.log("Closed Reg Modal");
      document.getElementById('register-form').style.display = "none";
   }

   closeBtnLogin.onclick = function() {
    console.log("Closed Login Modal");
    document.getElementById('login-form').style.display = "none";
   }
   
  });


/*document.getElementById("about-button").addEventListener("click", scrolltoAbout)

function scrolltoAbout() {
    document.getElementById("about-trism").scrollTo();
    document.get('about-trism').scrollIntoView({
        behavior: 'smooth'
    });
}*/

