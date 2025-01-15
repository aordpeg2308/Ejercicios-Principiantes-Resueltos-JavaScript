$(document).ready(function() {
    function filterProducts() {
        var searchText = $('#searchInput').val().toLowerCase();
        var selectedCategory = $('#categoryFilter').val();
        
        $('.product').each(function() {
            var productName = $(this).find('h3').text().toLowerCase();
            var productCategory = $(this).data('category');
            
            if (productName.indexOf(searchText) > -1 && (selectedCategory === '' || productCategory === selectedCategory)) {
                $(this).fadeIn();
            } else {
                $(this).fadeOut();
            }
        });
    }

    $('#searchInput').on('input', function() {
        filterProducts();
    });

    $('#categoryFilter').on('change', function() {
        filterProducts();
    });

    filterProducts();
});
