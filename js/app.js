const listItem = document.querySelectorAll('.menu__item')
const icon = document.querySelectorAll('.list__title')
let bool = true

const rotate = (number) => {
  if(bool) {
    icon[number].style.setProperty('--icon-rotate', '180deg')
    bool = false
  } else {
    icon[number].style.setProperty('--icon-rotate', '0deg')
    bool = true
  }
}

const changeClass = (number) => {
  listItem[number].classList.toggle("menu__item")
  listItem[number].classList.toggle("menu__item-activate")
}

listItem[0].addEventListener('click', () => {
  changeClass(0)
  rotate(0)
})
listItem[1].addEventListener('click', () => {
  changeClass(1)
  rotate(1)
})
listItem[2].addEventListener('click', () => {
  changeClass(2)
  rotate(2)
})
listItem[3].addEventListener('click', () => {
  changeClass(3)
  rotate(3)
})
listItem[4].addEventListener('click', () => {
  changeClass(4)
  rotate(4)
})

