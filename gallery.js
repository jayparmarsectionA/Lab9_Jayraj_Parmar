$(document).ready(function() {

    $('.filter-button').on('click', function() {
        var category = $(this).data('category');
        
        if (category === 'all') {
            $('.gallery-item').fadeIn();
        } else {
            $('.gallery-item').each(function() {
                if ($(this).data('category') !== category) {
                    $(this).fadeOut();
                } else {
                    $(this).fadeIn();
                }
            });
        }
    });

    $('.gallery-item').on('click', function() {
        var imageUrl = $(this).find('img').attr('src');
        $('#lightbox img').attr('src', imageUrl);
        $('#lightbox').fadeIn();
    });

    $('#lightbox .close-button').on('click', function() {
        $('#lightbox').fadeOut();
    });
});