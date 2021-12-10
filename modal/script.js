const modals = document.querySelectorAll(`.show-modal`)
const smallWindow = document.querySelector(`.modal`)
const overlay = document.querySelector(`.overlay`)
const closeBtn = document.querySelector(`.close-modal`)

const openModal = function () {
  smallWindow.classList.remove(`hidden`)
  overlay.classList.remove(`hidden`)
}

const closeModal = function () {
  overlay.classList.add(`hidden`)
  smallWindow.classList.add(`hidden`)
}

for (let i = 0; i < modals.length; i++) {
  modals[i].addEventListener(`click`, openModal)
}

closeBtn.addEventListener(`click`, closeModal)

overlay.addEventListener(`click`, closeModal)

document.addEventListener(`keydown`, function (e) {
  console.log(e.key)
  if (e.key == `Escape` && !smallWindow.classList.contains(`hidden`))
    closeModal()
})
