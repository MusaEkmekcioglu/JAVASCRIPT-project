document.body.appendChild(document.createElement(`textarea`))
document.body.appendChild(document.createElement(`button`))

const button = document.querySelector(`button`)
let counter = 0

const camelCase = function (texta) {
  const underCase = texta.trim().toLowerCase().split(`_`)
  counter++
  const firstSection =
    underCase[0] +
    underCase[1].replace(underCase[1][0], underCase[1][0].toUpperCase())
  const secondSection = `${`✅`.repeat(counter)}`
  console.log(firstSection.padEnd(25, ` `) + secondSection)
}

// console.log(camelCase(`   MusSa_ekMMek   `))
// console.log(camelCase(`Some_Variable`))
// console.log(camelCase(`calculate_AGE    `))
// console.log(camelCase(`  calculate_departure`))

// MusSa_ekMMek
// calculate_departure
// calculate_AGE
// Some_Variable

button.addEventListener(`click`, function () {
  const text = document.querySelector(`textarea`).value
  const eachText = text.split('\n')
  for (const a of eachText) {
    camelCase(a)
  }
})
