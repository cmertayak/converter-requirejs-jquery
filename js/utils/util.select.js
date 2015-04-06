define(['jquery'], function($){
    'use strict';

    return {
        _$el: null,

        /**
         * Wrap the select DOM element
         *
         * @param $el
         * @param changeCallbackFn
         */
        create: function($el, changeCallbackFn) {
            this._$el = $el;
            changeCallbackFn && this._$el.on('change', changeCallbackFn);

            return {
                _$el: this._$el,
                addItem: this.addItem,
                val: this.val,
                removeAllItems: this.removeAllItems,
                setByIndex: this.setByIndex
            };
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

        val: function() {
            return this._$el.val();
        },

        setByIndex: function(index) {
            $('option:eq(' + index + ')', this._$el).prop('selected', true);
        },

        /**
         * Removes all items
         */
        removeAllItems: function() {
            this._$el.empty();
        }
    };
});