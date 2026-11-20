$(document).ready(function() {
    initMobileMenu();

    $('#scrollUpArrow').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800); 
    });
});

$(window).on('load', function(){
    initMobileMenu();
});

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 400;
    if ($(window).scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    }
    else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

function initMobileMenu() {
    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}