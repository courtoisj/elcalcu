(function($){
  $(function(){

    $('.button-collapse').sideNav();

	$('#chk-newsite').click(function() {
		if( $(this).is(':checked')) {
			$("#newWebsiteForm").show();
		} else {
			$("#newWebsiteForm").hide();
		}
	});

	$('#chk-newlogo').click(function() {
		if( $(this).is(':checked')) {
			$("#newLogoForm").show();
		} else {
			$("#newLogoForm").hide();
		}
	});

	$('#chk-newprint').click(function() {
		if( $(this).is(':checked')) {
			$("#newPrintForm").show();
		} else {
			$("#newPrintForm").hide();
		}
	});

	$('#chk-newphoto').click(function() {
		if( $(this).is(':checked')) {
			$("#newPhotoForm").show();
		} else {
			$("#newPhotoForm").hide();
		}
	});

	$('#chk-newtext').click(function() {
		if( $(this).is(':checked')) {
			$("#newTextForm").show();
		} else {
			$("#newTextForm").hide();
		}
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
	$('.parallax').parallax();

	$('select').material_select();
});