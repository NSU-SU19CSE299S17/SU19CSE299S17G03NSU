
function sortlist(doc){

name.textContent=doc.data().name;
type.textContent=doc.data().type;


}

db.collection('Lists').get().then((snapshot) => {
 snapshot.docs.forEach(doc => {
   
    sortlist(doc);SS

 })
})