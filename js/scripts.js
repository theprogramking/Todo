// TODO INIT
var todoList = Todo(".todo");
todoList.load();
  
// TODO ADD
$(".todoadd").click(() => {
  if($(".todoinput").val()){
    todoList.add($(".todoinput").val());
    todoList.load();
    $(".todoinput").val("");
  }
});

// TODO REMOVE
$(document).on('click', '.todo button', function(){ 
  console.log($(this).attr("id"));
  todoList.remove($(this).attr("id"));
  console.log(todoList.todos);
  todoList.load();
});