/**
 * Search functionality using lunr.js
 */

(function() {
    let searchIndex = null;
    let searchData = null;
    let lunrIndex = null;

    // Initialize search when DOM is ready
    function initSearch() {
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        if (!searchInput || !searchResults) {
            return;
        }

        // Load search index
        fetch('/search/lunr-index.json')
            .then(response => response.json())
            .then(data => {
                searchData = data;

                // Build lunr index
                lunrIndex = lunr(function() {
                    this.ref('id');
                    this.field('title', { boost: 5 });
                    this.field('summary', { boost: 8 });
                    this.field('content');
                    this.field('date', { boost: 10 });

                    data.forEach(doc => {
                        this.add(doc);
                    });
                });

                console.log('Search index loaded with', data.length, 'entries');
            })
            .catch(error => {
                console.error('Error loading search index:', error);
            });

        // Handle search input
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.trim();

            if (query.length < 2) {
                searchResults.style.display = 'none';
                searchResults.innerHTML = '';
                return;
            }

            performSearch(query);
        });

        // Close search results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });

        // Reopen results when clicking on search input
        searchInput.addEventListener('focus', function() {
            if (searchResults.innerHTML) {
                searchResults.style.display = 'block';
            }
        });
    }

    function performSearch(query) {
        const searchResults = document.getElementById('search-results');

        if (!lunrIndex || !searchData) {
            searchResults.innerHTML = '<div class="search-result-item">Loading search index...</div>';
            searchResults.style.display = 'block';
            return;
        }

        try {
            // Perform search with wildcard for partial matches
            const results = lunrIndex.search(query + '*');

            if (results.length === 0) {
                searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
                searchResults.style.display = 'block';
                return;
            }

            // Display results (show first 10)
            const maxResults = 10;
            const displayResults = results.slice(0, maxResults);

            let html = '';
            displayResults.forEach(result => {
                const doc = searchData[result.ref];
                html += `
                    <a href="${doc.ref}" class="search-result-item">
                        <div class="search-result-title">${highlightMatch(doc.title, query)}</div>
                        <div class="search-result-summary">${highlightMatch(doc.summary, query)}</div>
                    </a>
                `;
            });

            if (results.length > maxResults) {
                html += `<div class="search-result-count">Showing ${maxResults} of ${results.length} results</div>`;
            }

            searchResults.innerHTML = html;
            searchResults.style.display = 'block';

        } catch (error) {
            console.error('Search error:', error);
            searchResults.innerHTML = '<div class="search-result-item">Search error occurred</div>';
            searchResults.style.display = 'block';
        }
    }

    function highlightMatch(text, query) {
        if (!text) return '';

        // Escape special regex characters in query
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escapedQuery})`, 'gi');

        return text.replace(regex, '<mark>$1</mark>');
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
    } else {
        initSearch();
    }
})();
