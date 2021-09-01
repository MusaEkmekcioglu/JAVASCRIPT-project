const progress= document.getElementById("progress");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const circles=document.querySelectorAll(".circle");



let count=1;

next.addEventListener("click",plus);

function plus(){
 count++;


if(count>circles.length){
    count=circles.length;
}
 update();
}

prev.addEventListener("click",minus);

function minus(){

    count --;
    if(count<1){
        count=1;
    }
    
    update();

}


function update(){


circles.forEach(function(circle,index){

    if(index<count){
        circle.classList.add("active");

    }else{
        circle.classList.remove("active");
    }
})
      const actives =document.querySelectorAll(".active");
      progress.style.width=(actives.length-1)/(circles.length-1) *100 + '%'
      if(count===1){
            prev.disabled=true



      }else if (count===circles.length){
                next.disabled=true
      }
      else{
          prev.disabled=false
          next.disabled=false
      }
}



