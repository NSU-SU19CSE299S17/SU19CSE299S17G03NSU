firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

      let email = user.email;
      let userid = user.uid;


      console.log(email);
      console.log(userid);

      document.getElementById('display-email').innerHTML = email;
      document.getElementById('Lname').innerHTML = Lname;
  

      var subBtn= document.getElementById('subBtn');
      let docRef = db.collection('Subscriptions').doc();
      var newListBtn= document.getElementById('newListBtn');
      let listRef = db.collection('Lists').doc();


      let subData = {
          User: email,
          Time:firebase.firestore.FieldValue.serverTimestamp()
        };

      $(document).ready(function() {
          $('#subBtn').click(function() {
            console.log("Sub Pressed");
            docRef.set(subData);

              })
            }) 

            $(document).ready(function() {
              $('#newListBtn').click(function() {
                var modalText=$('input[id=Lname]').val();
                console.log("Adding New List");
                console.log(modalText);

                let listData = {
                  Username: email,
                  DateCreated:firebase.firestore.FieldValue.serverTimestamp(),
                  ListName: modalText
        
                };
        
                listRef.set(listData);
    
                  })
                }) 

            db.collection('List').where('User','==', email).get().then((snapshot) => {
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