function sortlist(doc){

const rname= doc.data().NameOfResource;
const rtype=doc.data().Type;
const rurl=doc.data().Url;

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

db.collection('Lists').get().then((snapshot) => {
    console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        console.log(doc.id);
        const id= doc.id;

        db.collection('Lists').doc(doc.id).collection('Entries').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                console.log(doc.data());
                sortlist(doc);
            })
        })
    })
});


