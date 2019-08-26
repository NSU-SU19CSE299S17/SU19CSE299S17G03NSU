firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        let email = user.email;
        let userid = user.uid;


        console.log(email);
        console.log(userid);

        document.getElementById('display-email').innerHTML = email;
        //document.getElementById('Lname').innerHTML = Lname;

        var modalText = $('input[id=Lname]').val();

        var subBtn = document.getElementById('subBtn');
        let docRef = db.collection('Subscriptions').doc();

        var newListBtn = document.getElementById('newListBtn');
        let listRef = db.collection('Lists');


        let subData = {
            User: email,
            Time: firebase.firestore.FieldValue.serverTimestamp()
        };


        $(document).ready(function () {
            $('#subBtn').click(function () {
                console.log("Sub Pressed");
                docRef.set(subData);

            })
        })

        $(document).ready(function () {
            $('#newListBtn').click(function () {

                console.log("Adding New List");
                console.log(modalText);

                listRef.add({
                    Username: email,
                    DateCreated: firebase.firestore.FieldValue.serverTimestamp(),
                    ListName: modalText,
                    GeneratedUrl: "mylist.html?" + modalText + "&" + docRef.id

                })
                    .then(function (docRef) {
                        console.log("Document written with ID: ", docRef.id);
                        window.location.assign("mylist.html?" + modalText + "&" + docRef.id);
                    })
                    .catch(function (error) {
                        console.error("Error adding document: ", error);
                    });

            })
        })

        db.collection('Subscriptions').where('User', '==', email).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {

                const id = doc.id;
                console.log(doc.id);
                sortlistSub(doc);

            });
        });

        db.collection('Lists').where('Username', '==', email).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {

                const id = doc.id;
                console.log(doc.id);
                sortlistMyList(doc);

            });
        });

        function sortlistSub(doc) {

            const subid = doc.id;
            const time = doc.data().Time.toDate();

            var tableRef = document.getElementById('sub-table');

            // Insert a row in the table after the last row
            var newRow = tableRef.insertRow(-1);

            // Insert a cell in the row, starting from index 0
            var newCell = newRow.insertCell(0);
            var newCell1 = newRow.insertCell(1);


            // Append a text node to the cell
            var newText = document.createTextNode(subid);
            var newText1 = document.createTextNode(time);

            newCell.appendChild(newText);
            newCell1.appendChild(newText1);

        }

        function sortlistMyList(doc) {

            const nameOfList = doc.data().ListName;
            const generatedUrl = doc.data().GeneratedUrl;

            var tableRef = document.getElementById('myList-table');

            // Insert a row in the table after the last row
            var newRow = tableRef.insertRow(-1);

            // Insert a cell in the row, starting from index 0
            var newCell = newRow.insertCell(0);

            // Append a text node to the cell

            newCell.innerHTML = '<a href= "' + generatedUrl + '">' + nameOfList + '</a>';

        }

    } else {
        console.log("No User Signed In");
    }

});
