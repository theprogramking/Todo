// TODO INIT
var todoList = Todo(".todo", ".completed");
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
  todoList.remove($(this).attr("id"));
  todoList.load();
});