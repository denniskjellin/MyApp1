
		// Hamburger BTN 
        const toggleBtn = document.querySelector('.toggleBtn');
		const sidebar = document.querySelector('.sidebar');

		toggleBtn.addEventListener('click', () => {
			toggleBtn.classList.toggle('active');
			sidebar.classList.toggle('active');
		});
        