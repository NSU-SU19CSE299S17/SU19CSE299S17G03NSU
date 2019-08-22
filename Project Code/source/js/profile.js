
var subBtn= document.getElementById('subBtn');
let docRef = db.collection('Subscriptions').doc();


let data = {
    User: 'User1',
    Time:firebase.firestore.FieldValue.serverTimestamp()
  };


$(document).ready(function() {
    $('#subBtn').click(function() {
      console.log("Sub Pressed");
      docRef.set(data);

        })
      }) 

     