jQuery(function($) {

	'use strict';

  //	*****************************************************************************
  //	TinyMCE
  //	*****************************************************************************
  tinymce.init({
    selector: "textarea.tinymce"
  });





	//	*****************************************************************************
	//	Typeahead Autocomplete
	//	*****************************************************************************
	var typeaheadNames = [
				"Jose Bill",
				"Edwin Joanne",
				"Joel Alvin",
				"Jason Wendy",
				"Catherine Vincent",
				"Cathy Guy",
				"Marsha Joan",
				"Francis Ethel",
				"Bob Wesley",
				"Sara Regina",
			],
			typeaheadNamesAges = [
				{
					"name": "Cynthia Branch",
					"age": 17,
					"email": "theodore@davis.ma"
				}, {
					"name": "Wesley Teague",
					"age": 16,
					"email": "lester@monroe.gr"
				}, {
					"name": "Leslie Parsons",
					"age": 26,
					"email": "ryan@bolton.si"
				}, {
					"name": "Gilbert Klein",
					"age": 46,
					"email": "judith@barefoot.hm"
				}, {
					"name": "Karl Snow",
					"age": 3,
					"email": "martin@carlton.mw"
				}, {
					"name": "Harvey Jones",
					"age": 9,
					"email": "judy@mckenzie.gb"
				}, {
					"name": "Jose Davidson",
					"age": 28,
					"email": "alison@barr.rs"
				}, {
					"name": "Brett Boyette",
					"age": 4,
					"email": "elaine@walsh.pk"
				}, {
					"name": "Ted Carver",
					"age": 39,
					"email": "gayle@haynes.lr"
				}, {
					"name": "Alison Schultz",
					"age": 22,
					"email": "katherine@nichols.gn"
				}
			];





	//	-----------------------------------------------------------------------------
	//	Autocomplete1
	//	-----------------------------------------------------------------------------
	$('.typeahead-1').typeahead({
		name: 'autocomplete-1',
		local: typeaheadNames
	});





	//	-----------------------------------------------------------------------------
	//	typeahead-2
	//	-----------------------------------------------------------------------------
	$('.typeahead-2').typeahead({
		name: 'autocomplete-2',
		valueKey: ['name'],
		local: typeaheadNamesAges,
    template: [
    '<span>{{name}}, {{age}}<br>',
    '<span>{{email}}</span>'
    ].join(''),
    engine: Hogan
	});





	//	*****************************************************************************
	//	Date Picker
	//	*****************************************************************************
  var picker = new Pikaday({ field: document.getElementById('datepicker') });





	//	*****************************************************************************
  //	Dropzone File Uploads
  //	*****************************************************************************
	if ($('.dropzone').length) {
		Dropzone.autoDiscover = false;
		var myDropzone = new Dropzone("form.dropzone", {
			url: "/file/post",
			addRemoveLinks: true
		});
	}





	// READY
	// Remove .no-js
	$('.no-js').removeClass('no-js');

});


