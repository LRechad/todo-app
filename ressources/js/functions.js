const updateDataObject = () => {
    localStorage.setItem('todoList', JSON.stringify(data));
}

const addItem = (value) => {
    renderItem(value);
    input.value = ''; // Clear the input field

    data.todo.push(value); // Push value into todo array
    updateDataObject();
}

const removeItem = function () {
    const item = this.parentNode.parentNode;
    const list = item.parentNode;
    const listID = list.id;
    const value = item.innerText;

    if (listID === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
    }

    updateDataObject();
    list.removeChild(item);
}

const completeItem = function () {
    const item = this.parentNode.parentNode;
    const list = item.parentNode;
    const listID = list.id;
    const value = item.innerText;

    if (listID === 'todo') {
        data.todo.splice(data.todo.indexOf(value), 1); // Remove item from the todo array
        data.completed.push(value);
    } else {
        data.completed.splice(data.completed.indexOf(value), 1);
        data.todo.push(value);
    }
    updateDataObject();

    // Select correct list from the item parent id
    let target = (listID === 'todo') ? document.querySelector('#completed') : document.querySelector('#todo');

    list.removeChild(item);
    target.insertBefore(item, target.childNodes[0]);
}

// Dealing with first rendering 
const renderTodo = () => {
    if (!data.todo.length && !data.completed.length) return;

    for (todo in data.todo) {
        let value = data.todo[todo];
        renderItem(value);
    }

    for (complete in data.completed) {
        let value = data.completed[complete];
        renderItem(value, true);
    }
}

// Render items to the DOM
const renderItem = (text, completed = null) => {
    const list = (completed) ? document.querySelector('#completed') : document.querySelector('#todo');

    // Create the DOM
    const item = document.createElement('li');
    const buttons = document.createElement('div');
    const remove = document.createElement('button');
    const complete = document.createElement('button');

    item.innerText = text; // Get & change text value 

    // Add classes to the DOM
    buttons.classList.add('buttons');
    remove.classList.add('remove');
    complete.classList.add('complete');

    // Get the correct design for buttons
    remove.innerHTML = materialIcon;
    complete.innerHTML = materialIcon;

    remove.addEventListener('click', removeItem); // Event listener for delete item
    complete.addEventListener('click', completeItem); // Event listener for complete item

    // Populate the DOM
    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);
    list.insertBefore(item, list.childNodes[0]); // Increase item on the top of the list
}