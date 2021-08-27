// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const openModal = document.querySelector(".modal-btn");
const modalOver = document.querySelector(".modal-overlay");
const close = document.querySelector(".close-btn");

openModal.addEventListener("click",function(){
    modalOver.classList.toggle("open-modal");
})
close.addEventListener("click",function(){
    modalOver.classList.toggle("open-modal");
})