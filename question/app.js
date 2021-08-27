//using selectors inside the element
// traversing the dom
/*
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
           e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
    })
})  */

const questions = document.querySelectorAll(".question");

questions.forEach(function(elma){

const btn = elma.querySelector(".question-btn");

btn.addEventListener("click",function(){
    questions.forEach(function(e){
        console.log(e);
        if(e !== elma){
            e.classList.remove("show-text");
        }
    })
   


      elma.classList.toggle("show-text"); 
   

    
});
});