let Todo = (selector) => {
   
    let todos = [
      { id: 0, text: "Laundry" },
      { id: 1, text: "Get gas" },
      { id: 2, text: "Clean room" }
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
          todos.splice(todos.indexOf(todos[i]), 1)
        }
      }
      return todos;
    }
    
    let load = () => {
      $(selector).empty();
      todos.forEach((todo) => {
        $(selector).append(`<div class='todoitem'><p id=${todo.id}>${todo.text}</p><button id=${todo.id} href="#">x</button></div>`);
      });
    }
    
    return {
      todos: todos,
      add: add,
      remove: remove,
      load: load
    }
}