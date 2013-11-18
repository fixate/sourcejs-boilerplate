(function(window, $) {

  'user_strict';

  $.fn.toggler = function() {
    var $this = $(this),
        $target = $('.'+get_target()),
        activeClass = 'is-open';

    function do_toggle() {
      if ($target.hasClass(activeClass)) {
        $target.removeClass(activeClass);
      } else {
        $target.addClass(activeClass);
      }
    }

    function get_target() {
      return $this.data('target');
    }

    $this.on('click touch', function(e) {
      e.preventDefault();
      do_toggle(this);
    });
  }

  $('.js-menu-toggle').toggler();

}(this, this.jQuery));
