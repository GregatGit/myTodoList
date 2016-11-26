var todoList = {
    todos: [],
    addTodo: function (todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        //view.displayTodos();
    },
    changeTodo: function (position, todoText){
        this.todos[position].todoText = todoText;
        //view.displayTodos();
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        //view.displayTodos();
    },
    toggleCompleted: function (position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        //view.displayTodos();
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        for (let i = 0; i < totalTodos; i++){
            if (this.todos[i].completed){
                completedTodos++;
            }
        }
       // if everything is true make everything false
       if (completedTodos === totalTodos){
           // everything false
           for (let i = 0; i < totalTodos; i++){
               this.todos[i].completed = false;
           }
       }else{
           for (let i = 0; i < totalTodos; i++){
               this.todos[i].completed = true;
           }
       }
       //view.displayTodos();
    }
};

var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function () {
        var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleCompleted: function () {
        var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos();
    }
};

var view = {
    displayTodos: function() {
        var todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (let i = 0; i < todoList.todos.length; i++){
            var todoLi = document.createElement('li');
            var todoTextCompletionStatus = '( ) ';

            if (todoList.todos[i].completed){
                todoTextCompletionStatus = '(x) ';
            }

        todoLi.textContent = todoTextCompletionStatus + todoList.todos[i].todoText;
        todosUl.appendChild(todoLi);
        }
    }
};

