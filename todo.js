
var theTodo = {
    todoList: [],
    toggleAll: function() {
            var alltodos = this.todoList.length;
            var todotsCompleted = 0;

        for(var i = 0; i < alltodos; i++ ) {
            if(this.todoList[i].complete === true) {
                todotsCompleted++;
            }
        }
        if(todotsCompleted === alltodos) {
            for (var i = 0; i < alltodos; i++) {            
                this.todoList[i].complete = false;
            }
        }
        else {
            for (var i = 0; i < alltodos; i++) {            
                this.todoList[i].complete  = true;
            }
        }
    },  

    addItem: function (item) {
        this.todoList.push({
            todoText: item,
            complete: false
        }); 
    },
    changeItem: function (position, todoText) { 
        // this.todoList[position] = changeName;
        this.todoList[position].todoText = todoText;
    },
    deleteItem: function (todoText){
        this.todoList.splice(todoText, 1);
    },
    todoToggle: function(position) {
        var todo = this.todoList[position];
        todo.complete = !todo.complete;
    }
}

var handler = {
    displayallTodos: function () {
        theTodo.displayTodo();
    },
    toggleAlltodos: function() {
        theTodo.toggleAll();
        theTodo.displayTodo();
        view.displayTodotext();
    },
    addnewTodo: function() {
        var todoinput = document.getElementById('todoinput');
        theTodo.addItem(todoinput.value);
        todoinput.value = ' ';
        view.displayTodotext();
    },
    changeTodo: function() {
        var todoposition = document.getElementById('todopositon');  
        var todochangetext = document.getElementById('todochangetext');  
        theTodo.changeItem(todoposition.value, todochangetext.value);
        todoposition.value = '';
        todochangetext.value = '';
        view.displayTodotext();
    },
    deleteTodo: function() {
        var deletetodoposition = document.getElementById('deletetodoPosition');
        theTodo.deleteItem(deletetodoposition.value);
        deletetodoposition.value = '';
        view.displayTodotext();
    },
    completeTodo: function() {
        var toggleCompleteposition = document.getElementById('toggletodocomplete'); 
        theTodo.todoToggle(toggleCompleteposition.value);
        toggleCompleteposition.value = '';
        view.displayTodotext();
    }
};

var view = {
    displayTodotext: function() {
        var todosul = document.querySelector('ul');
        todosul.innerHTML = '';
        for(var i = 0; i < theTodo.todoList.length; i++ ) {
            var todosli = document.createElement('li');
            var todos = theTodo.todoList[i];
            var todotextwithcomplete = '';

            if (todos.complete === true ) {
                todotextwithcomplete = '✅ ' + todos.todoText;
            }else {
                todotextwithcomplete = ' ' + todos.todoText;
            }
            todosli.textContent = todotextwithcomplete;
            todosul.appendChild(todosli);
        }
    },
}




//console.log();