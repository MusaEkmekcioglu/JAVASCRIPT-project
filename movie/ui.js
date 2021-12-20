console.log(`namer`)
const title = document.querySelector(`#title`)
const director = document.querySelector(`#director`)
const url = document.querySelector(`#url`)
const button1 = document.querySelector(`#film-form`)
const downsection = document.querySelector(`#films`)
const deleteFilm = document.querySelector(`#delete-film`)
const deleteAllFilm = document.querySelector(`#clear-films`)
const films = document.querySelector(`#films`)

const movieSet = {
  movieTitle: `title`,
  movieDirector: `director`,
  url: `url`,
}
console.log(movieSet)

button1.addEventListener(`submit`, function (e) {
  movieSet.movieTitle = title.value
  movieSet.movieDirector = director.value
  movieSet.url = url.value
  downsection.innerHTML += `  <tr>
  <td><img src="${movieSet.url}" class="img-fluid img-thumbnail"></td>
  <td>${movieSet.movieTitle}</td>
  <td>${movieSet.movieDirector}</td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr> `
  title.value = ``
  director.value = ``
  url.value = ``

  e.preventDefault()
})

downsection.addEventListener(`click`, function (e) {
  if (e.target.innerHTML == `Filmi Sil`) {
    e.target.parentElement.parentElement.remove()
  }
})
deleteAllFilm.addEventListener(`click`, function () {
  while (films.firstElementChild !== null) {
    films.firstElementChild.remove()
  }
})
