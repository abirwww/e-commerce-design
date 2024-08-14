(function() {
    const searchKeywords = [
        "MacBook Pro ",
        "AirPods Pro",
        "Samsung S9",
        "Tablet",
        "Xiaomi",
        "JBL speaker",
        "Canon",
        "AirPods Max",
        "Asus",
        "MagSafe",
    ];

    document.addEventListener('click', function(event) {
        const target = event.target;

        if (target.matches('.increment-btn')) {
            event.preventDefault();
            const input = target.previousElementSibling;
            input.value = parseInt(input.value) + 1;
        }

        if (target.matches('.decrement-btn')) {
            event.preventDefault();
            const input = target.nextElementSibling;
            input.value = parseInt(input.value) - 1;
        }

        if (target.matches('.toggle-nav-btn')) {
            const navBarMenu = document.getElementById('nav_bar_menue');
            if (navBarMenu) {
                navBarMenu.classList.toggle('active');
            }
        }
    });
})();
