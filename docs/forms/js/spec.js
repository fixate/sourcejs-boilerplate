jQuery(function($) {

	'use strict';

	//	*****************************************************************************
	//	TinyMCE
	//	*****************************************************************************

	// function to allow indentation of lists in tinyMCE using tab
	// key: http://mopo.ws/PI8CTq
	function fixTinyMCETabIssue(inst) {
		inst.onKeyDown.add(function(inst, e) {
			// Firefox uses the e.which event for keypress
			// While IE and others use e.keyCode, so we look for both
			if (e.keyCode) code = e.keyCode;
			else if (e.which) code = e.which;
			if(code == 9 && !e.altKey && !e.ctrlKey) {
				// toggle between Indent and Outdent command, depending on if SHIFT is pressed
				if (e.shiftKey) inst.execCommand('Outdent');
				else inst.execCommand('Indent');
				// prevent tab key from leaving editor in some browsers
				if(e.preventDefault) {
						e.preventDefault();
				}
				return false;
			}
		});
	}



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
		name: 'first',
		local: typeaheadNames
	});

	//	-----------------------------------------------------------------------------
	//	typeahead-2
	//	-----------------------------------------------------------------------------

	$('.typeahead-2').typeahead({
		name: 'second',
		valueKey: ['name'],
		local: typeaheadNamesAges
	});

	//	-----------------------------------------------------------------------------
	//	Autocomplete3
	//	-----------------------------------------------------------------------------
	// $(".typeahead-3").typeahead({
	// 	name: 'third',
	// 	local: typeaheadNamesAges,
	// 	template: [
	// 		'<span>{{name}}, {{age}}<br>',
	// 		'<span>{{email}}</span>'
	// 	].join(''),
	// 	engine: Hogan
	// 	})
	// .data("autocomplete")._renderItem = function(ul, item) {
	// 	return $("<li></li>")
	// 		.data("item.autocomplete", item)
	// 		.append(
	// 			"<a class='mblock cf'>" +
	// 				"<img class='mblock-alpha' src='http://placekitten.com/20/20'/>" +
	// 				"<div class='mblock-beta'>" +
	// 					"<span>" + item.label + "</span><br><small>" + item.desc + "</small></div></a>")
	// 		.appendTo(ul);
	// };

	// $(".token-list").on("click", function(e){
	// 	$(this).find(".token-list-input").focus();
	// });

	// $("#autocomplete3").on("keydown", function(e){
	// 	$this = $(this);
	// 	if ($this.parent().prev() && $this.val() === "" && e.keyCode === 8) {
	// 		$this.parent().prev().remove();
	// 	}
	// });


	//	*****************************************************************************
	//	Date Picker
	//	*****************************************************************************
  $(document).ready(function() {
    var picker = new Pikaday({ field: document.getElementById('datepicker') });
  });


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

