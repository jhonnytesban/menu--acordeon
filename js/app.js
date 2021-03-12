const listItem = document.querySelectorAll('.menu__item')
const icon = document.querySelectorAll('.list__title')
let bool0 = true
let bool1 = true
let bool2 = true
let bool3 = true
let bool4 = true

// const rotate = (number, b) => {
//   if(b) {
//     icon[number].style.setProperty('--icon-rotate', '180deg')
//     b = !b
//   } else {
//     icon[number].style.setProperty('--icon-rotate', '0deg')
//     b = !b
//   }
// }

const changeClass = (number) => {
  listItem[number].classList.toggle("menu__item")
  listItem[number].classList.toggle("menu__item-activate")
}

listItem[0].addEventListener('click', () => {
  changeClass(0)
  // rotate(0, bool0)
  if (bool0) {
    icon[0].style.setProperty('--icon-rotate', '180deg')
    bool0 = !bool0
  } else {
    icon[0].style.setProperty('--icon-rotate', '0deg')
    bool0 = !bool0
  }
})
listItem[1].addEventListener('click', () => {
  changeClass(1)
  // rotate(1)
  if (bool1) {
    icon[1].style.setProperty('--icon-rotate', '180deg')
    bool1 = false
  } else {
    icon[1].style.setProperty('--icon-rotate', '0deg')
    bool1 = true
  }
})
listItem[2].addEventListener('click', () => {
  changeClass(2)
  // rotate(2)
  if (bool2) {
    icon[2].style.setProperty('--icon-rotate', '180deg')
    bool2 = false
  } else {
    icon[2].style.setProperty('--icon-rotate', '0deg')
    bool2 = true
  }
})
listItem[3].addEventListener('click', () => {
  changeClass(3)
  // rotate(3)
  if (bool3) {
    icon[3].style.setProperty('--icon-rotate', '180deg')
    bool3 = false
  } else {
    icon[3].style.setProperty('--icon-rotate', '0deg')
    bool3 = true
  }
})
listItem[4].addEventListener('click', () => {
  changeClass(4)
  // rotate(4)
  if (bool4) {
    icon[4].style.setProperty('--icon-rotate', '180deg')
    bool4 = false
  } else {
    icon[4].style.setProperty('--icon-rotate', '0deg')
    bool4 = true
  }
})

