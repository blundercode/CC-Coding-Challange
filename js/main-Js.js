$(document).ready(function () {
    $('.footer-tab').click(function () {
		      var tab_id = $(this).attr('data-tab');
		      $('.footer-tab').removeClass('current');
        $('.footer-tab a').removeClass('current');
		      $('.tab-container').removeClass('current');
		      $(this).addClass('current');
		      $("#" + tab_id).addClass('current');
    })
}) 