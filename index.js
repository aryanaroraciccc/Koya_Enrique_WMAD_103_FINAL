// elements
const mobileMenuButton = document.getElementById("mobile-menu-button")
const mobileMenu = document.getElementById("mobile-menu")

// states
let isMobileMenuVisible = false
const setIsMobileMenuVisible = (bool = !mobileMenu.classList.contains("is-not-visible")) => {
  isMobileMenuVisible = bool
}

let isWideScreen = window.innerWidth > 768;
const setIsWideScreen = (bool = window.innerWidth > 768) => {
  isWideScreen = bool
}

// functions
const toggleVisible = (htmlElement) => {
  htmlElement.classList.toggle("is-not-visible")
  htmlElement.classList.contains("is-not-visible")
    ? setIsMobileMenuVisible(false)
    : setIsMobileMenuVisible(true)
}

const toggleVisibleByScreenSize = (htmlElement) => {
  isWideScreen
    ? htmlElement.classList.remove("is-not-visible")
    : htmlElement.classList.add("is-not-visible")
}

const handleWindowResize = () => {
  setIsWideScreen()

  if (isWideScreen && isMobileMenuVisible) {
    mobileMenu.classList.add("is-not-visible")
    setIsMobileMenuVisible(false)
  }
}

// event listeners
window.addEventListener("resize", handleWindowResize)

mobileMenuButton.addEventListener("click", () => toggleVisible(mobileMenu))
