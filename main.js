const overlay = document.querySelector('[data-overlay]')
const menuCloseBtn = document.querySelector('[data-menu-close-btn]')
const menuOpenBtn = document.querySelector('[data-menu-open-btn]')
const menu = document.querySelector('[data-menu]')

document.addEventListener('click', function (e) {
  if (!e.target.closest('[data-menu-btn]')) return

  menuOpenBtn.classList.toggle('hidden')
  menuCloseBtn.classList.toggle('hidden')
  overlay.classList.toggle('hidden')
  menu.classList.toggle('hidden')
})
