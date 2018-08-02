const removeIcon = '<i class="material-icons md-24">delete</i>';
const completeIcon = '<i class="material-icons md-24"></i>';

const addButton = document.querySelector('#add-item');
const input = document.querySelector('#input-item');

addButton.addEventListener('click', () => {
    let value = input.value;
    if (value) {
        addItem(value); 
        input.value = '';
    }
});

const removeItem = function() {
    const item = this.parentNode.parentNode;
    const list = item.parentNode;
    
    list.removeChild(item);
}

const completeItem = function() {
    let item = this.parentNode.parentNode;
    const list = item.parentNode;
    let listID = list.id;

    // Select correct list from the item parent id
    let target = (listID === 'todo') ? document.querySelector('#completed') : document.querySelector('#todo');
    
    list.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}


const addItem = (text) => {
    const list = document.querySelector('#todo');
    
    // Create the DOM
    const item = document.createElement('li');
    const buttons = document.createElement('div');
    const remove = document.createElement('button');
    const complete = document.createElement('button');
    
    item.innerText = text;  // Get & change text value 
    
    // Add classes to the DOM
    buttons.classList.add('buttons');
    remove.classList.add('remove');
    complete.classList.add('complete');

    // Get the correct icon for buttons
    remove.innerHTML = removeIcon;
    complete.innerHTML = completeIcon;

    remove.addEventListener('click', removeItem);   // Event listener for delete item
    complete.addEventListener('click', completeItem);   // Event listener for complete item

    // Populate the DOM
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    list.insertBefore(item, list.childNodes[0]);    // Increase item on the top of the list
}

