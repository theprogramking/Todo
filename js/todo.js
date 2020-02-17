let Todo = (selector, completedSelector) => {
   
    let todos = [
      { id: 0, text: "Laundry.", completed: false },
      { id: 1, text: "Get gas.", completed: false },
      { id: 2, text: "Make a new friend.", completed: false },
      { id: 2, text: "Clean room.", completed: true },
      { id: 2, text: "Drink Water.", completed: true }
    ];

    let add = (text) => {
      todos.push({
        id: todos.length,
        text: text
      });
      return todos;
    }
    
    let remove = (id) => {
      for(var i in todos){
        if(todos[i].id == id){
          todos[i].completed = true;
        }
      }
      return todos;
    }
    
    let load = () => {
      $(selector).empty();
      $(completedSelector).empty();

      todos.forEach((todo) => {
        if(todo.completed){
            $(completedSelector).append(`<div class='todoitem complete'><p>${todo.text}</p></div>`);
        } else {
            $(selector).append(`<div class='todoitem'><p id=${todo.id}>${todo.text}</p><button id=${todo.id} href="#">x</button></div>`);
        }
      });
    }
    
    return {
      todos: todos,
      add: add,
      remove: remove,
      load: load
    }
}