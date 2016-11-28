var todoList = {
    todos: [],
    addTodo: function (todoText){
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    changeTodo: function (position, todoText){
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position){
        this.todos.splice(position, 1);
    },
    toggleCompleted: function (position){
        var todo = this.todos[position];
        todo.completed = !todo.completed;
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
    deleteTodo: function (position) {
        todoList.deleteTodo(position);
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
        todosUl.innerHTML = ''; // this clears always all current html in list
        for (let i = 0; i < todoList.todos.length; i++){
            var todoLi = document.createElement('li');
            var todoTextCompletionStatus = '( ) ';

            if (todoList.todos[i].completed){
                todoTextCompletionStatus = '(x) ';
            }
                      
            todoLi.id = i;
            todoLi.textContent = todoTextCompletionStatus + todoList.todos[i].todoText;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },
    createDeleteButton: function() {
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function() {
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function(event) {
            // get element clicked on
            var elementClicked = event.target;

            // make sure is was the delete button clicked
            if (elementClicked.className === 'deleteButton'){
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id)); 
            }
        });
    }
};
view.setUpEventListeners();