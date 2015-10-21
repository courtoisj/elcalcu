(function($){
  $(function(){

    $('.button-collapse').sideNav();

    /* LEISTUNGEN */

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

	/* LEISTUNGEN: FOTOGRAFIE */
	$('#swt-portraits').click(function() {
		if( $(this).is(':checked')) {
			$("#portraits").show();
		} else {
			$("#portraits").hide();
		}
	});

	$('#swt-businessphotography').click(function() {
		if( $(this).is(':checked')) {
			$("#businessphotography").show();
		} else {
			$("#businessphotography").hide();
		}
	});

	$('#swt-architecturephotography').click(function() {
		if( $(this).is(':checked')) {
			$("#architecturephotography").show();
		} else {
			$("#architecturephotography").hide();
		}
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
	$('.parallax').parallax();

	$('select').material_select();
});