(function(window, $) {

  'user_strict';

  $.fn.toggler = function() {
    var $this = $(this),
        activeClass = 'is-open';

    function do_toggle(el) {
      $target = $('.' + get_target(el));

      if ($target.hasClass(activeClass)) {
        $target.removeClass(activeClass);
      } else {
        $target.addClass(activeClass);
      }
    }

    function get_target(el) {
      return $(el).data('target');
    }

    $this.on('click touch', function(e) {
      e.preventDefault();
      do_toggle(this);
    });
  }

  $('.js-menu-toggle').toggler();

}(this, this.jQuery));
