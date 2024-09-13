document.addEventListener("DOMContentLoaded", function() {
	const links = document.querySelectorAll(".carousel-link");

	function updateLinks() {
		links.forEach(link => {
			const radioId = link.parentElement.getAttribute("for");
			const radio = document.getElementById(radioId);
			
			if (radio.checked) {
				link.classList.add("active-link");
			} else {
				link.classList.remove("active-link");
			}
		});
	}

	links.forEach(link => {
		link.addEventListener("click", function(event) {
			if (!this.classList.contains("active-link")) {
				event.preventDefault();
			}
		});
	});

	const radios = document.querySelectorAll('input[name="slider"]');
	radios.forEach(radio => {
		radio.addEventListener("change", updateLinks);
	});

	updateLinks();
});



