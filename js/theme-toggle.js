// Dark mode toggle functionality
(function() {
	const STORAGE_KEY = 'theme-preference';
	const DARK_CLASS = 'dark-mode';

	// Get saved theme or default to light
	function getThemePreference() {
		return localStorage.getItem(STORAGE_KEY) || 'light';
	}

	// Apply theme to document
	function applyTheme(theme) {
		if (theme === 'dark') {
			document.documentElement.classList.add(DARK_CLASS);
		} else {
			document.documentElement.classList.remove(DARK_CLASS);
		}
		updateToggleIcon(theme);
	}

	// Update toggle button icon
	function updateToggleIcon(theme) {
		const icon = document.querySelector('.theme-toggle-icon');
		if (icon) {
			icon.textContent = theme === 'dark' ? '☀️' : '🌙';
		}
	}

	// Toggle theme
	function toggleTheme() {
		const currentTheme = getThemePreference();
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		localStorage.setItem(STORAGE_KEY, newTheme);
		applyTheme(newTheme);
	}

	// Apply theme class immediately on page load (before DOMContentLoaded to prevent flash)
	const savedTheme = getThemePreference();
	if (savedTheme === 'dark') {
		document.documentElement.classList.add(DARK_CLASS);
	}

	// Set up toggle button and icon when DOM is ready
	document.addEventListener('DOMContentLoaded', function() {
		// Update icon to match current theme
		updateToggleIcon(getThemePreference());

		const toggleButton = document.getElementById('theme-toggle');
		if (toggleButton) {
			toggleButton.addEventListener('click', toggleTheme);
		}
	});
})();
