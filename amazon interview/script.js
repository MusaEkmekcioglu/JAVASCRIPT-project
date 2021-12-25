const btn = document.querySelectorAll(`.btn`)
let arr = []
console.log('arr', arr)

btn.forEach(function (e) {
  e.addEventListener(`click`, function (s) {
    if (!s.target.className.includes(`green`)) {
      arr.push(s.target.className)
    }

    s.target.classList.add(`green`)

    if (arr.length == 7) {
      const newArr = arr.reverse()
      arr = []

      for (let i = 0; i < 7; i++) {
        setTimeout(() => {
          let a = document.querySelector(`.${newArr[i].slice(4)}`)

          a.classList.remove(`green`)
          console.log('setTimeout ~ classList', classList)
        }, 2000 * (i + 1))
      }
    }
  })
})
