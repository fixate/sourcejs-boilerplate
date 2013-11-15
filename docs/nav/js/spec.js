(function(window, $) {

  function toggle(el) {
    var $el = $(el),
        activeClass = 'menu-toggle--active';

    if ($el.hasClass(activeClass)) {
      $el.removeClass(activeClass);
    } else {
      $el.addClass(activeClass);
    }
  }

  $('.js-menu-toggle').on('click touch', function(e) {
    e.preventDefault();
    toggle(this);
  });

}(this, this.jQuery));
