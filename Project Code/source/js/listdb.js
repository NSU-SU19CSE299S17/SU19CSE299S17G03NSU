const resourcelist= document.querySelector('#resource-list');

function renderlist(doc){

name.textContent=doc.data().name;
type.textContent=doc.data().type;

$("#resource-name").append(name);
$("#resource-type").append(name);

}

db.collection('Lists').get().then((snapshot) => {
 snapshot.docs.forEach(doc => {
   
    renderlist(doc);

 })
})