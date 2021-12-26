;`use strict`

// console.log(`musa`)

const selectBoxed = document.getElementById(`movie`)
const emptySeats = document.querySelectorAll(`.row .seat:not(.occupied)`)
const count = document.getElementById(`count`)
const film = document.getElementById(`film`)
const total = document.getElementById(`total`)
//const total = document.getElementById(`total`)

let counter = 0
let price = 10
let movieName = `Avengers: Endgame`
let selectArr = 0

document.addEventListener(`DOMContentLoaded`, function () {
  const fromStorage = JSON.parse(localStorage.getItem(`selectedSeatItems`))
  counter = fromStorage.length
  fromStorage.forEach((a) => {
    ;[...emptySeats][a].classList.add(`selected`)
    showMessage()
  })
})

// window.addEventListener(`load`, function () {
//   film.innerText =
//     selectBoxed.options[selectBoxed.selectedIndex].textContent.split(`(`)[0]
// })

selectBoxed.addEventListener(`change`, function (e) {
  price = e.target.value
  movieName =
    selectBoxed.options[selectBoxed.selectedIndex].textContent.split(`(`)[0]
  showMessage()
})

const showMessage = function () {
  count.textContent = counter
  film.textContent = movieName
  total.textContent = price * counter
}
emptySeats.forEach((emptySeat) => {
  emptySeat.addEventListener(`click`, function () {
    !emptySeat.className.includes(`selected`)
      ? emptySeat.classList.add(`selected`)
      : emptySeat.classList.remove(`selected`)

    counter = document.querySelectorAll(`.row .selected`).length

    showMessage()
    const selectedSeat = document.querySelectorAll(`.row .seat.selected`)
    const selectedSeatIndex = [...selectedSeat].map((seat) =>
      [...emptySeats].indexOf(seat)
    )
    localStorage.setItem(`selectedSeatItems`, JSON.stringify(selectedSeatIndex))
  })
})

let arr1 = [1, 2, 3, 4, 5, 6, 7]
let arr2 = [3, 4, 5, 7, 6]

const arr3 = arr1.map((a) => arr2.indexOf(a))

console.log(arr3)
