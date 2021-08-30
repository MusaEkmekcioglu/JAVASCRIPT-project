


const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardbody = document.querySelectorAll(".card-body")[0];
const secondcardbody = document.querySelectorAll(".card-body")[1];
const filter= document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

eventListener();

function eventListener(){
form.addEventListener("submit",addtodo);
document.addEventListener("DOMContentLoaded",load);
secondcardbody.addEventListener("click",deletetodo);
filter.addEventListener("keyup",filtere);
clearButton.addEventListener("click",clear);



function clear(){
   //todoList.innerHTML="";
   while(todoList.firstElementChild != null){
       todoList.removeChild(todoList.firstElementChild);
   }

   localStorage.removeItem("todos");

}






function filtere(e){
const filterValue= e.target.value.toLowerCase();
const listItems=document.querySelectorAll(".list-group-item");

listItems.forEach(function(listItem){
    const text=listItem.textContent.toLowerCase();
if(text.indexOf(filterValue) === -1){
    listItem.setAttribute("style","display:none !important");

}
else{
    listItem.setAttribute("style","display:block");
}

})

}


function deletetodo(e){

   if(e.target.className=="fa fa-remove"){
      e.target.parentElement.parentElement.remove();
      showAlert("success","silindi");
      deletestroge(e.target.parentElement.parentElement.textContent);
   }

}

function deletestroge(e){
    let todos=addtodofromstorage();
    todos.forEach(function(todo,index){
        if(todo===e){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}



}

function load(){
    let todos=addtodofromstorage();
     todos.forEach(function(todo){
         addtodotoUi(todo);
     });
}





function addtodo(e){
    const newtodo = todoInput.value.trim();

    if (newtodo===""){

        /* <div class="alert alert-warning" role="alert">
                    This is a warning alert—check it out!
                  </div> */
        showAlert("warning","lutfen bir todo girin");
       
      


    }
    else{
        addtodotoUi(newtodo);
        addtodotostorage(newtodo);
        showAlert("success","basariyla girildi");
    }
    


    
    e.preventDefault();
}

function showAlert(type,message){
 const showType= document.createElement("div");
 showType.className=`alert alert-${type}`;
 showType.role="alert";
 const showTest=document.createTextNode(message);
 showType.appendChild(showTest);
  firstCardbody.appendChild(showType);

  setTimeout(function(){
    showType.remove();
},1000);

}

function addtodofromstorage(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}
function addtodotostorage(newtodo){

  let todos = addtodofromstorage();
  todos.push(newtodo);
  localStorage.setItem("todos",JSON.stringify(todos));

}






function addtodotoUi(newtodo){
    /* <li class="list-group-item d-flex justify-content-between">
    Todo 1
   <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>
</li>
*/
    const listItem= document.createElement("li");
    const link = document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class = 'fa fa-remove'></i>"
     listItem.className="list-group-item d-flex justify-content-between";
     listItem.appendChild(link);
     listItem.appendChild(document.createTextNode(newtodo));
     todoList.appendChild(listItem);
     todoInput.value='';
}