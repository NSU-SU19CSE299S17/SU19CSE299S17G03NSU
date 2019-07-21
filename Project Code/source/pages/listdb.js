const resourcelist=document.querySelector('#resource-list');

function renderList(doc){
    let li= document.createElement('li');
    let name= document.createElement('span');
    let type= document.createElement('lspan');

    li.setAttribute('data-id',doc.id);
    name.textContent= doc.data().Name;
    type.textContent= doc.data().Type;

    li.appendChild(name);
    li.appendChild(type);

    resourcelist.appendChild(li);

}


db.collection('Lists').get().then((snapshot)=> {
snapshot.docs.forEach(doc => {
    renderList(doc);
})

})