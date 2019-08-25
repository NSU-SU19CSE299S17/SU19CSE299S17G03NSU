
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
  
        let email = user.email;
        let userid = user.uid;
  
  
        console.log(email);
        console.log(userid);


        var href = document.location.href;
        var queryString = href.split('?')[1];
        queryString = queryString.split('#')[0];
        var arr = queryString.split('&');
        var listname= arr[0];
        var docId=arr[1];
        console.log(docId);
        console.log(listname);

        const trimListName= decodeURIComponent(listname);

/*db.collection('Lists').get().then((snapshot) => {
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        console.log(doc.id);
        const id = doc.id;

        db.collection('Lists').doc(doc.id).collection('Entries').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
                sortlist(doc);
            })
        })
    })
});*/

const addItemRef = document.getElementById('add-new-item');

addItemRef.addEventListener('submit', (event) => {
    event.preventDefault();

    db.collection('Lists').get().then((snapshot) => {

        db.collection('Lists').doc(docId).collection('Entries').add({
            NameOfResource: addItemRef.Rname.val(),
            Type: addItemRef.Rtype.val(),
            URL: addItemRef.Rlink.val(),
            NameOfList: trimListName,
            Owner: email

        })
    });
  });

    db.collectionGroup('Entries').where('NameOfList', '==', trimListName).where('Owner', '==', email).get().then(function (querySnapshot) {

        querySnapshot.forEach(function (doc) {
            console.log(doc.id, ' => ', doc.data());
            sortlist(doc);
        });

    });

    function sortlist(doc){

        const rname= doc.data().NameOfResource;
        const rtype= doc.data().Type;
        const rurl= doc.data().Url;
        var tableRef = document.getElementById('resource-list');
        
          // Insert a row in the table after the last row
          var newRow   = tableRef.insertRow(-1);
        
          // Insert a cell in the row, starting from index 0
          var newCell  = newRow.insertCell(0);
          var newCell1  = newRow.insertCell(1);
          var newCell2  = newRow.insertCell(2);
        
        
          // Append a text node to the cell
          var newText  = document.createTextNode(rname);
          var newText1  = document.createTextNode(rurl);
          var newText2  = document.createTextNode(rtype);
        
          newCell.appendChild(newText);
          newCell1.appendChild(newText1);
          newCell2.appendChild(newText2);
        
      }
} else {
    console.log("No User Signed In");
  }
  
  });