const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardbody = document.querySelectorAll(".card-body")[0];
const secondcardbody = document.querySelectorAll(".card-body")[1];
const filter= document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");



form.addEventListener("submit",addtodo);

function addtodo(e){
  const newtodo =todoInput.value.trim();


  

     if(newtodo ===""){
       showAlert("warning","olmadi aga ");
     }  
     else{

         showAlert("success","basari ile devam ")
          addtodoIU(newtodo);
          addtodotostorage(newtodo);
     }           
 
  


  
  e.preventDefault();


}
function showAlert(type,message){
/* <div class="alert alert-warning" role="alert">
                    This is a warning alert—check it out!
                  </div> */

     const mssg= document.createElement("div");
     mssg.className=`alert alert-${type}`;
     const mtext=document.createTextNode(`${message}`);
      mssg.appendChild(mtext);
     firstCardbody.appendChild(mssg);

     setTimeout(function(){
         mssg.remove();
     },1000)
}

function addtodoIU(newtodo){
   /* <li class="list-group-item d-flex justify-content-between">
    Todo 1
   <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>
</li> */

   const newlielement= document.createElement("li");
   const newaelement= document.createElement("a");
   newlielement.className="list-group-item d-flex justify-content-between";
   newaelement.href="#";
   newaelement.className="delete-item";
   newaelement.innerHTML="<i class = 'fa fa-remove'></i>";
   newlielement.appendChild(newaelement);
   newlielement.appendChild(document.createTextNode(newtodo));
   todoList.appendChild(newlielement);
    todoInput.value="";

}

function addtodotofromSTR(){

      let todos;
    
     if( localStorage.getItem("todos")===null){
         todos=[];
     }
     else{
         todos =JSON.parse(localStorage.getItem("todos"));
             }
       return todos;
}


function addtodotostorage(newtodo){
    let todos =addtodotofromSTR();
    todos.push(newtodo);
    localStorage.setItem("todos",JSON.stringify(todos));

}