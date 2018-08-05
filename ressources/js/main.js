let data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')) : {
    todo: [],
    completed: []
};

const materialIcon = '<i class="material-icons md-24"></i>';
const addButton = document.querySelector('#add-item');
const input = document.querySelector('#input-item');

renderTodo(); // First rendering

addButton.addEventListener('click', () => {
    let value = input.value;
    if (value) {
        addItem(value);
    }
});

input.addEventListener('keydown', function(e) {
    let value = this.value;
    if (e.code === 'Enter' && value) {
        addItem(value);
    }
})