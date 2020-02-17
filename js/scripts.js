// TODO INIT
var todoList = Todo(".todo", ".completed");
todoList.load();
  
// TODO ADD
function addTodo(){
  todoList.add($(".todoinput").val());
  todoList.load();
  $(".todoinput").val("");
}

$(".todoadd").click(() => {
  if($(".todoinput").val()){
    addTodo();
  }
});

$(".todoinput").keypress((e) => {
  if(e.keyCode == 13){
    addTodo()
  } 
});

// TODO REMOVE
$(document).on('click', '.todo button', function(){ 
  todoList.remove($(this).attr("id"));
  todoList.load();
});