$(document).ready(function () {

    $('#sidebar').niceScroll({
        cursorcolor: '#53619d', // Changing the scrollbar color
        cursorwidth: 4, // Changing the scrollbar width
        cursorborder: 'none', // Rempving the scrollbar border
    });

    // when opening the sidebar
    $('#sidebarCollapse').on('click', function () {
        // open sidebar
        $('#sidebar').addClass('active');
        // fade in the overlay
        $('.overlay').fadeIn();
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    // if dismiss or overlay was clicked
    $('#dismiss, .overlay').on('click', function () {
      // hide the sidebar
      $('#sidebar').removeClass('active');
      // fade out the overlay
      $('.overlay').fadeOut();
    });
});
