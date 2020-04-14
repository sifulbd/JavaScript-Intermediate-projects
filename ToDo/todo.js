const h2 = document.querySelector('h2');
const todoInput = document.querySelector('.todoinput');
const todoAddbtn = document.querySelector('.addbtn');
const ulTodo = document.querySelector('.todo-collection');
const finterInput = document.querySelector('.todofilter');
const clearBtn = document.querySelector('.clrbtn');

todoAddbtn.addEventListener('click', addTodo);
ulTodo.addEventListener('click', deleteTodo);

function addTodo() {
    const TodoInputContent  = todoInput.value;
    if(TodoInputContent === '') {
        console.log('Enter task name');
    }else {
        // Add li to ul
        const liTodo = document.createElement('li');
        liTodo.className = 'list-group-item';
        liTodo.textContent = TodoInputContent;
        // add li todo text 
        const liText = document.createElement('span');
        liText.className = 'badge';
        liText.innerHTML = '<i class="glyphicon glyphicon-remove"></i>';        
        liTodo.appendChild(liText);  
        // Add li text to ul
        ulTodo.appendChild(liTodo);  
        // Clear input
        todoInput.value  = '';
    }
}

function deleteTodo(e) {
    if(e.target.parentElement.classList.contains('list-group-item')) {
       e.target.parentElement.remove();
    }
}