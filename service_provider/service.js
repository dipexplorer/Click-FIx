document.addEventListener('DOMContentLoaded', function () {
    const categoryList = document.querySelectorAll('.category-list li');
    const searchInput = document.querySelector('.provider-search-bar input');
    const viewMoreButton = document.querySelector('.view-more button');
    const profileList = document.querySelector('.profile-list');
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'No service providers found. Please try a different search term.';
    errorMessage.style.display = 'none';
    errorMessage.style.color = 'red';
    profileList.appendChild(errorMessage);

    // Function to filter profiles based on search term and selected category
    function filterProfiles(searchTerm, selectedCategory) {
        // Filter by search term
        const profileCards = document.querySelectorAll('.profile-list .card');
        let found = false;
        profileCards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const categories = card.dataset.categories.split(',');
            const shouldShow = categories.includes(selectedCategory) || selectedCategory === 'all';
            const containsTerm = name.includes(searchTerm.toLowerCase());
            card.style.display = (containsTerm && shouldShow) ? 'block' : 'none';
            if (containsTerm && shouldShow) {
                found = true;
            }
        });

        // Show error message if no service providers found
        errorMessage.style.display = found ? 'none' : 'block';
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

    // Function to handle search
    function handleSearch() {
        const selectedCategory = document.querySelector('.category-list .active').dataset.category;
        filterProfiles(searchInput.value.trim(), selectedCategory);
    }

    // Event listener for search button click
    document.querySelector('.provider-search-bar button').addEventListener('click', handleSearch);

    // Event listener for "Enter" key press in search input
    searchInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Dummy function to simulate loading more profiles
    function loadMoreProfiles() {
        // Here, you can fetch more profiles from a server or database
        // For now, let's just display an alert
        alert('Loading more profiles...');
    }

    // Event listener for "View More" button click
    viewMoreButton.addEventListener('click', loadMoreProfiles);
});
