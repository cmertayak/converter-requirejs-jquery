define(['jquery'], function($){
    'use strict';

    return {
        _$el: null,

        /**
         * Initializing the select DOM element
         *
         * @param $el
         * @param changeCallbackFn
         */
        init: function($el, changeCallbackFn) {
            this._$el = $el;
            changeCallbackFn && this._$el.on('change', changeCallbackFn);
        },

        /**
         * Add a new item
         *
         * @param value
         * @param text
         */
        addItem: function(value, text) {
            $('<option>', {
                value: value,
                text: text
            }).appendTo(this._$el);
        },

        /**
         * Removes all items
         */
        removeAllItems: function() {
            this._$el.empty();
        }
    };
});