/**
 * @file
 * Configuration of the Hansels Revenge jQuery library.
 */
(function ($) {

  Drupal.behaviors.cookie_crumbs = {
    attach: function (context, settings) {
//       console.log("SETTINGS");
//       console.log(settings);
      // If hook_cookie_crumbs_js_settings() sets title_override it will
      // override the title.
      if (settings.cookie_crumbs.title_override) {
        var titleCallback = function(){
          return settings.cookie_crumbs.title_override;
        }
      }
      // Attach the breadcrumbs.
      jQuery.fn.hanselsRevenge({
        titleCallback : titleCallback,
        breadCrumbSelector: '.' + settings.cookie_crumbs.class_name,
        maxDepth: parseInt(settings.cookie_crumbs.items_to_show),
        allowURIQuery: true,
        debug: false,
        cookieOptions: {path: "/"},
        inheritLandingCrumbs: false,
	cookieKey: settings.cookie_crumbs.cookieKey
      });
    }
  };
})(jQuery);
