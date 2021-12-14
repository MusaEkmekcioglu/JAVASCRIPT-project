const form = document.querySelector(`#todo-form`)
const formInput = document.querySelector(`#todo`)
const list = document.querySelector(`.list-group`)
const cardBody1 = document.querySelectorAll(`.card-body`)[0]
const cardBody2 = document.querySelectorAll(`.card-body`)[1]

const deleteItem = document.querySelector(`.delete-item`)
const clearItems = document.querySelector(`#clear-todos`)
let inputArr = []
//console.log(list_items)
eventListener()

function eventListener() {
  form.addEventListener(`submit`, addToDoUI)
  cardBody2.addEventListener(`click`, deleteToDoUI)
  clearItems.addEventListener(`click`, clearAllUI)
}

function addToDoUI(e) {
  const inputValue = formInput.value.trim()
  const liElement = document.createElement(`li`)
  const aElement = document.createElement(`a`)
  //   list.innerHTML += ` <li class="list-group-item d-flex justify-content-between">
  //       ${inputValue}
  //       <a href = "#" class ="delete-item">
  //           <i class = "fa fa-remove"></i>
  //       </a>

  //   </li>`
  //console.log(list_item)
  if (inputValue == ``) {
    showAlert(`danger`)
  } else if (inputArr.includes(`${inputValue}`)) {
    showAlert(`success`)
    formInput.value = ``
  } else {
    liElement.className = `list-group-item d-flex justify-content-between`
    aElement.href = `#`
    aElement.className = `delete-item`
    aElement.innerHTML = ` <i class = "fa fa-remove"></i>`
    liElement.appendChild(document.createTextNode(`${inputValue}`))
    liElement.appendChild(aElement)
    //console.log(liElement)

    list.appendChild(liElement)
    //console.log(liElement)
    inputArr.push(`${inputValue}`)
    formInput.value = ``
    //console.log(inputArr)
    e.preventDefault()
  }
}

function showAlert(type) {
  const messageError = document.createElement(`div`)
  messageError.className = `alert alert-${type}`
  messageError.textContent = `This is a${type} alert—check it out!`
  cardBody1.appendChild(messageError)
  //     <div class="alert alert-danger" role="alert">
  //   This is a danger alert—check it out!
  setTimeout(function () {
    messageError.remove()
  }, 1000)
}

function deleteToDoUI(e) {
  console.log(e.target.parentElement.parentElement.textContent)
  if (e.target.className == `fa fa-remove`) {
    e.target.closest(`li`).remove()

    inputArr.pop(`${e.target.parentElement.parentElement.textContent}`)
  }
}
function clearAllUI() {
  const list_items = document.querySelectorAll(`.list-group-item`)
  list_items.forEach(function (item) {
    console.log(item)
    item.remove()
  })
  inputArr = []
}
