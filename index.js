// elements
const mobileMenuButton = document.getElementById("mobile-menu-button")
const mobileMenu = document.getElementById("mobile-menu")

// constants
const isNotVisibleClassName = "is-not-visible"
const mobileBreakPointPx = 768

// states
let isMobileMenuVisible = false
const setIsMobileMenuVisible = (bool = !mobileMenu.classList.contains("is-not-visible")) => {
  isMobileMenuVisible = bool
}

let isWideScreen = window.innerWidth > mobileBreakPointPx;
const setIsWideScreen = (bool = window.innerWidth > mobileBreakPointPx) => {
  isWideScreen = bool
}

// functions
const toggleVisible = (htmlElement) => {
  htmlElement.classList.toggle(isNotVisibleClassName)
  htmlElement.classList.contains(isNotVisibleClassName)
    ? setIsMobileMenuVisible(false)
    : setIsMobileMenuVisible(true)
}

const toggleVisibleByScreenSize = (htmlElement) => {
  isWideScreen
    ? htmlElement.classList.remove(isNotVisibleClassName)
    : htmlElement.classList.add(isNotVisibleClassName)
}

const handleWindowResize = () => {
  setIsWideScreen()

  if (isWideScreen && isMobileMenuVisible) {
    mobileMenu.classList.add(isNotVisibleClassName)
    setIsMobileMenuVisible(false)
  }
}

const handlePcMenuItemColor = () => {
  const pathName = window.location.pathname

  const toPrimary = (id) => {
    const element = document.getElementById(id)
    element.classList.add("text-primary")
  }

  switch (pathName) {
    case "/home.html":
      toPrimary("header-menu-pc-home")
      return
    case "/reservation.html":
      toPrimary("header-menu-pc-reservation")
      return
    case "/menu.html":
      toPrimary("header-menu-pc-menu")
      return
    case "/contact.html":
      toPrimary("header-menu-pc-contact")
      return
  }

}

// event listeners
window.addEventListener("load", handlePcMenuItemColor)
window.addEventListener("resize", handleWindowResize)

mobileMenuButton.addEventListener("click", () => toggleVisible(mobileMenu))
