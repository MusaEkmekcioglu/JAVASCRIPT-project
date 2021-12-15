const divElement = document.querySelector(`.div`)
const minElement = document.querySelector(`.min`)
const multiElement = document.querySelector(`.multi`)
const plusElement = document.querySelector(`.plus`)
const acElement = document.querySelector(`.ac`)
const numsElement = document.querySelectorAll(`.num`)
const upText = document.querySelector(`.ustpen`)
const downText = document.querySelector(`.altpen`)
const equal = document.querySelector(`.equal`)
const operations = document.querySelectorAll(`.operation`)
let value1 = ``
let value2 = ``
let valueTotal = ``
let sentence = ``

divElement.addEventListener(`click`, div)
minElement.addEventListener(`click`, min)
multiElement.addEventListener(`click`, mul)
plusElement.addEventListener(`click`, sum)
acElement.addEventListener(`click`, ac)

operations.forEach(function (operation) {
  operation.addEventListener(`click`, function (e) {
    if (e.target.textContent == `=`) {
      downText.textContent = valueTotal
      value1 = valueTotal
      value2 = ``
      upText.textContent = ``
      upText.textContent = value1
    }
  })
})

numsElement.forEach(function (numElement) {
  numElement.addEventListener(`click`, function () {
    if (upText.textContent.includes('+')) {
      value2 += numElement.textContent
      upText.textContent = `${sentence} ${value2}`
      valueTotal = Number(value1) + Number(value2)
      console.log(value2)
    } else if (upText.textContent.includes('-')) {
      value2 += numElement.textContent
      upText.textContent = `${sentence} ${value2}`
      valueTotal = Number(value1) - Number(value2)
      console.log(value2)
    } else if (upText.textContent.includes('÷')) {
      value2 += numElement.textContent
      upText.textContent = `${sentence} ${value2}`
      valueTotal = Number(value1) / Number(value2)
      console.log(value2)
    } else if (upText.textContent.includes('x')) {
      value2 += numElement.textContent
      upText.textContent = `${sentence} ${value2}`
      valueTotal = Number(value1) * Number(value2)
      console.log(value2)
    } else {
      value1 += numElement.textContent
      upText.textContent = Number(value1)
      console.log(value1)
    }
  })
})

function sum() {
  upText.textContent += ` + `
  sentence = upText.textContent
}
function min() {
  upText.textContent += ` - `
  sentence = upText.textContent
}
function div() {
  upText.textContent += ` % `
  sentence = upText.textContent
}
function mul() {
  upText.textContent += ` x `
  sentence = upText.textContent
}
function ac() {
  upText.textContent = ``
  valueTotal = ``
  value1 = ``
  value2 = ``
  valueTotal = ``
  downText.textContent = ``
  sentence = ``
}
