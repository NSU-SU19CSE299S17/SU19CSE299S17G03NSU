firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        let email = user.email;
        let userid = user.uid;


        console.log(email);
        console.log(userid);


        var href = document.location.href;
        var queryString = href.split('?')[1];
        queryString = queryString.split('#')[0];
        var arr = queryString.split('&');
        var listname = arr[0];
        var docId = arr[1];
        console.log(docId);
        console.log(listname);

        const trimListName = decodeURIComponent(listname);

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

            db.collection('Library').add({
                NameOfResource: addItemRef.Rname.value,
                Type: addItemRef.Rtype.value,
                URL: addItemRef.Rlink.value,
                NameOfList: listname,
                Owner: email,
                Review: addItemRef.Review.value,
                Tags: addItemRef.Tags.value
            });
            console.log("New Item Added to Library.");

        });

        /*db.collectionGroup('Entries').where('NameOfList', '==', trimListName).where('Owner', '==', email).get().then(function (querySnapshot) {

            querySnapshot.forEach(function (doc) {
                console.log(doc.id, ' => ', doc.data());
                sortlist(doc);
            });

        });*/

        db.collection('Library').where('NameOfList','==', listname).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {

                const id = doc.id;
                console.log(doc.id);
                sortlist(doc);

            });
        });

        function sortlist(doc) {

            const rname = doc.data().NameOfResource;
            const rtype = doc.data().Type;
            const rurl = doc.data().URL;
            const rreview = doc.data().Review;
            const rtags = doc.data().Tags
            var tableRef = document.getElementById('resource-list');

            // Insert a row in the table after the last row
            var newRow = tableRef.insertRow(-1);

            // Insert a cell in the row, starting from index 0
            var newCell = newRow.insertCell(0);
            var newCell1 = newRow.insertCell(1);
            var newCell2 = newRow.insertCell(2);
            var newCell3 = newRow.insertCell(3);
            var newCell4 = newRow.insertCell(4);



            // Append a text node to the cell
            var newText = document.createTextNode(rname);
            var newText1 = document.createTextNode(rurl);
            var newText2 = document.createTextNode(rtype);
            var newText3 = document.createTextNode(rreview);
            var newText4 = document.createTextNode(rtags);


            newCell.appendChild(newText);
            newCell1.appendChild(newText1);
            newCell2.appendChild(newText2);
            newCell3.appendChild(newText3);
            newCell4.appendChild(newText4);

        }
    } else {
        console.log("No User Signed In");
    }

});
