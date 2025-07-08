// navigation.js
// This script handles the navigation bar functionality
const toggleBtn = document.getElementById("mobile-menu-toggle")
const mobileMenu = document.getElementById("mobile-menu")
const menuIcon = document.getElementById("menu-icon")

const productsToggle = document.getElementById("mobile-products-toggle")
const productsMenu = document.getElementById("mobile-products-menu")
const productsIcon = document.getElementById("mobile-products-icon")

toggleBtn.addEventListener("click", () => {
	const isOpen = !mobileMenu.classList.contains("hidden")
	mobileMenu.classList.toggle("hidden")
	menuIcon.className = isOpen
		? "ri-menu-line text-2xl"
		: "ri-close-line text-2xl"
})

productsToggle.addEventListener("click", () => {
	const isOpen = !productsMenu.classList.contains("hidden")
	productsMenu.classList.toggle("hidden")
	productsIcon.classList.toggle("rotate-180")
})

// This script handles the product carousel functionality
// It allows users to scroll through product cards using next and previous buttons
document.addEventListener("DOMContentLoaded", function () {
	const carousel = document.getElementById("product-carousel")
	const prevBtn = document.getElementById("prev-btn")
	const nextBtn = document.getElementById("next-btn")

	let scrollAmount = 0
	const cardWidth = 320 // Width of each card + gap

	nextBtn.addEventListener("click", function () {
		scrollAmount += cardWidth
		if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
			scrollAmount = carousel.scrollWidth - carousel.clientWidth
		}
		carousel.scrollTo({
			left: scrollAmount,
			behavior: "smooth",
		})
	})

	prevBtn.addEventListener("click", function () {
		scrollAmount -= cardWidth
		if (scrollAmount < 0) {
			scrollAmount = 0
		}
		carousel.scrollTo({
			left: scrollAmount,
			behavior: "smooth",
		})
	})
})
// Path: tabs.js
// This script handles the tab functionality for the product details section
document.addEventListener("DOMContentLoaded", function () {
	const tabButtons = document.querySelectorAll(".tab-button")
	const tabContents = document.querySelectorAll(".tab-content")

	tabButtons.forEach((button) => {
		button.addEventListener("click", function () {
			// Remove active class from all buttons and contents
			tabButtons.forEach((btn) => {
				btn.classList.remove("active")
				btn.classList.remove("text-gray-900")
				btn.classList.remove("border-primary")
				btn.classList.add("text-gray-500")
				btn.classList.add("border-transparent")
			})

			tabContents.forEach((content) => {
				content.classList.remove("active")
			})

			// Add active class to clicked button and corresponding content
			this.classList.add("active")
			this.classList.add("text-gray-900")
			this.classList.add("border-primary")
			this.classList.remove("text-gray-500")
			this.classList.remove("border-transparent")

			const tabId = this.getAttribute("data-tab")
			document.getElementById(tabId).classList.add("active")
		})
	})
})

// Path: gallery.js
// This script handles the gallery filtering functionality
document.addEventListener("DOMContentLoaded", function () {
	const filterButtons = document.querySelectorAll(".gallery-filter")
	const galleryItems = document.querySelectorAll(".gallery-item")

	filterButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const filterValue = this.getAttribute("data-filter")

			// Remove active class from all buttons
			filterButtons.forEach((btn) => {
				btn.classList.remove("active")
				btn.classList.remove("text-gray-900")
				btn.classList.add("text-gray-500")
			})

			// Add active class to clicked button
			this.classList.add("active")
			this.classList.add("text-gray-900")
			this.classList.remove("text-gray-500")

			// Filter gallery items
			galleryItems.forEach((item) => {
				if (
					filterValue === "all" ||
					item.getAttribute("data-category") === filterValue
				) {
					item.style.display = "block"
				} else {
					item.style.display = "none"
				}
			})
		})
	})
})
