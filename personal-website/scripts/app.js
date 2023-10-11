const navToggleIcon = document.querySelector('.menu__toggle-icon')
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')

navToggleIcon.addEventListener('click', function () {
    this.classList.toggle('menu__toggle-icon--open')
    menu.classList.toggle('menu--open')
    cover.classList.toggle('cover--show')
})