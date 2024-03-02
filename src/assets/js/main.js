const overlay = document.querySelector(".overlay")
const menuBtn = document.querySelector(".menu-toggle")
const menuCloseBtn = document.querySelector(".menu-close-btn")

const submenus = document.querySelectorAll(".sub-menu")

const menu = document.querySelector(".header__nav")

document.addEventListener("click", e => {
	if (e.target.closest(".menu-item-has-children")) {
		e.target
			.closest(".menu-item-has-children")
			.querySelector(".sub-menu")
			.classList.toggle("active")
	} else {
		submenus.forEach(s => s.classList.remove("active"))
	}
})

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
