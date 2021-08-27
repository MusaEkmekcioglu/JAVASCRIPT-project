
const close= document.querySelector(".close-btn");
const navToogle= document.querySelector(".sidebar-toggle");
const sideBar= document.querySelector(".sidebar")

navToogle.addEventListener("click",function(){
   sideBar.classList.toggle("show-sidebar");
})

close.addEventListener("click",function(){
    sideBar.classList.remove("show-sidebar")

})