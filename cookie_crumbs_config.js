/**
 * @file
 * Configuration of the Hansels Revenge jQuery library.
 */
(function ($) {

  Drupal.behaviors.hanselsRevenge = {
    attach: function (context, settings) {
      // Attach the breadcrumbs.
      $.fn.hanselsRevenge({
        breadCrumbSelector: '.' + settings.cookie_crumbs.class_name,
        maxDepth: parseInt(settings.cookie_crumbs.items_to_show),
        debug: false,
        cookieOptions: {path: "/"}
      });
    }
  };
})(jQuery);
