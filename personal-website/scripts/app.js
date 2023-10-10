const navToggleIcon = document.querySelector('.menu__toggle-icon')

navToggleIcon.addEventListener('click', function () {
    this.classList.toggle('menu__toggle-icon--open')
})