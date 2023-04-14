/**
 * @file
 * Enhances Theme Switcher form.
 */

/* eslint-env es6:false, node:false */
/* eslint-disable strict, func-names, object-shorthand, no-var, prefer-template, prefer-arrow-callback */
(function($, Drupal, once) {
  "use strict";

  Drupal.behaviors.themeswitcherAutoSubmit = {
    attach: function(context) {
      once('themeswitcherAutoSubmit', '.js-themeswitcher-form', context)
        .forEach((form) => {
          $(form).on("change", "select", function() {
            $(form).trigger("submit");
          });
        });
    }
  };
})(jQuery, Drupal, once);
/* eslint-enable strict, func-names, object-shorthand, no-var, prefer-template, prefer-arrow-callback */
/* eslint-env es6:true, node:true */
