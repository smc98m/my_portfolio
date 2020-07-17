// This allows the header to change colors as the user scrolls more than 100px
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in css)
            $(".header").removeClass("active");
        }
    });
});

// Click link in header to scroll down the page to that section
function about_wrap() {
    document.getElementById( 'about_wrap' ).scrollIntoView();
    window.setTimeout( function () { top(); }, 2000 );
};

function project_wrap() {
    document.getElementById( 'project_wrap' ).scrollIntoView();
    window.setTimeout( function () { top(); }, 2000 );
};

function connect_wrap() {
    document.getElementById( 'connect_wrap' ).scrollIntoView();
    window.setTimeout( function () { top(); }, 2000 );
};


// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
} 
    else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}