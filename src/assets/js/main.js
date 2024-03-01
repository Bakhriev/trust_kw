const overlay = document.querySelector(".overlay")
const menuBtn = document.querySelector(".menu-toggle")
const menuCloseBtn = document.querySelector(".menu-close-btn")

const menu = document.querySelector(".header__nav")

menuBtn.addEventListener("click", () => {
	menu.classList.add("active")
	overlay.classList.add("active")
	document.body.classList.add("disable-scroll")
})

overlay.addEventListener("click", () => {
	menu.classList.remove("active")
	overlay.classList.remove("active")
	document.body.classList.remove("disable-scroll")
})

menuCloseBtn.addEventListener("click", () => {
	menu.classList.remove("active")
	overlay.classList.remove("active")
	document.body.classList.remove("disable-scroll")
})
