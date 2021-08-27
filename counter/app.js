let count=0;

let value= document.getElementById("value");
let buttons=document.querySelectorAll(".btn");

buttons.forEach(function(e){
    e.addEventListener("click",function(a){
        let classtext= a.currentTarget.classList;
        if(classtext.contains("decrease")){
            count--;
        }
        else if (classtext.contains("increase")){
            count++;
        }
        else{
            count=0;
        }
        if(count>0){
            value.style.color="white";
            document.body.style.backgroundColor="green";
        }
        if(count<0){
            value.style.color="orange";
            document.body.style.backgroundColor="red";
        }
        if(count==0){
            value.style.color="black"
            document.body.style.backgroundColor="white";
        }
        value.textContent=count;

    });

});

