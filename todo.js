
var theTodo = {
    todoList: [],
    displayTodo: function(){
        if (this.todoList.length === 0 ) {
            console.log("Your todo list is empty! ");
        } else {
            for(var i = 0; i < this.todoList.length; i++ ) {
                if (this.todoList[i].complete === true) {
                    console.log('✅', this.todoList[i].todoText);
                }else {
                    console.log(' ', this.todoList[i].todoText);
                }
            }
        }            
    },

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
        this.displayTodo();
    },
    changeItem: function (position, todoText) { 
        // this.todoList[position] = changeName;
        this.todoList[position].todoText = todoText;
        this.displayTodo();
    },
    deleteItem: function (todoText){
        this.todoList.splice(todoText, 1);
        this.displayTodo();
    },
    todoToggle: function(position) {
        var todo = this.todoList[position];
        todo.complete = !todo.complete;
        this.displayTodo();
    }
}

var handler = {
    displayallTodos: function () {
        theTodo.displayTodo();
    },
    toggleAlltodos: function() {
        theTodo.toggleAll();
        theTodo.displayTodo();
    },
    addnewTodo: function() {
        var todoinput = document.getElementById('todoinput');
        theTodo.addItem(todoinput.value);
        todoinput.value = ' ';
    }
}