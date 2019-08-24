firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

      let email = user.email;
      let userid = user.uid;

      console.log(email);
      console.log(userid);

      document.getElementById('display-email').innerHTML = email;


      var subBtn= document.getElementById('subBtn');
      let docRef = db.collection('Subscriptions').doc();


      let data = {
          User: email,
          Time:firebase.firestore.FieldValue.serverTimestamp()
        };


      $(document).ready(function() {
          $('#subBtn').click(function() {
            console.log("Sub Pressed");
            docRef.set(data);

              })
            }) 

            db.collection('Subscriptions').where('User','==', email).get().then((snapshot) => {
              snapshot.docs.forEach(doc => {
            
              const id= doc.id;
              console.log(doc.id);
              sortlist(doc);
            
              });
            });

      function sortlist(doc){

        const subid= doc.id;
        const time= doc.data().Time.toDate();
      
        var tableRef = document.getElementById('sub-table');
        
          // Insert a row in the table after the last row
          var newRow   = tableRef.insertRow(-1);
        
          // Insert a cell in the row, starting from index 0
          var newCell  = newRow.insertCell(0);
          var newCell1  = newRow.insertCell(1);
        
        
          // Append a text node to the cell
          var newText  = document.createTextNode(subid);
          var newText1  = document.createTextNode(time);
        
          newCell.appendChild(newText);
          newCell1.appendChild(newText1);
        
        }

} else {
  console.log("No User Signed In");
}

});