jQuery(function($) {

	'use strict';

	//	*****************************************************************************
	//	Tooltipster
	//	*****************************************************************************

	$('.tooltip-n').tooltipster({ position: 'top'});
	$('.tooltip-s').tooltipster({ position: 'bottom'});
	$('.tooltip-w').tooltipster({ position: 'left'});
	$('.tooltip-e').tooltipster({ position: 'right'});
	$('.tooltip-nw').tooltipster({ position: 'top-right'});
	$('.tooltip-ne').tooltipster({ position: 'top-left'});
	$('.tooltip-sw').tooltipster({ position: 'bottom-right'});
	$('.tooltip-se').tooltipster({ position: 'bottom-left'});

	$('.tooltip-mouse').tooltipster({ trigger: 'click'});

	// READY
	// Remove .no-js
	$('.no-js').removeClass('no-js');

  $(document).ready(function() {
    $('.tooltip').tooltipster();
  });

});


