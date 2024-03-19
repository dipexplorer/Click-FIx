document.addEventListener('DOMContentLoaded', function () {
    const categoryList = document.querySelectorAll('.category-list li');
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const viewMoreButton = document.querySelector('.view-more button');

    // Function to filter service provider profiles based on category
    function filterProfilesByCategory(category) {
        const profileCards = document.querySelectorAll('.profile-list .card');
        profileCards.forEach(card => {
            const categories = card.dataset.categories.split(',');
            if (categories.includes(category) || category === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Function to filter profiles based on search term and selected category
    function filterProfiles(searchTerm, selectedCategory) {
        // Filter by search term
        const profileCards = document.querySelectorAll('.profile-list .card');
        profileCards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            if (name.includes(searchTerm.toLowerCase())) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        // Filter by selected category
        filterProfilesByCategory(selectedCategory);
    }

    // Event listener for category selection
    categoryList.forEach(category => {
        category.addEventListener('click', function () {
            categoryList.forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
            const selectedCategory = this.dataset.category;
            filterProfiles(searchInput.value.trim(), selectedCategory);
        });
    });

    // Event listener for search button click
    searchButton.addEventListener('click', function () {
        const selectedCategory = document.querySelector('.category-list .active').dataset.category;
        filterProfiles(searchInput.value.trim(), selectedCategory);
    });

    // Event listener for "Enter" key press in search input
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const selectedCategory = document.querySelector('.category-list .active').dataset.category;
            filterProfiles(searchInput.value.trim(), selectedCategory);
        }
    });

    // Dummy function to simulate loading more profiles
    function loadMoreProfiles() {
        // Here, you can fetch more profiles from a server or database
        // For now, let's just display an alert
        alert('Loading more profiles...');
    }

    // Event listener for "View More" button click
    viewMoreButton.addEventListener('click', function () {
        loadMoreProfiles();
    });
});
