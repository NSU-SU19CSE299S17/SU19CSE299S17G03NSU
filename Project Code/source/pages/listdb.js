const resourcelist= document.querySelector('#resource-list');

function renderlist(doc){
/*let li= document.createElement('li');
let name= document.createElement('span');
let type= document.createElement('span');

li.setAttribute('data-id',doc.id);*/
const rname=doc.data().Name;
const rtype=doc.data().Type;

$("#resource-name").append(rname);
$("#resource-type").append(rtype);

}

db.collection('Lists').get().then((snapshot) => {
 snapshot.docs.forEach(doc => {
   
    renderlist(doc);
    
 })
})