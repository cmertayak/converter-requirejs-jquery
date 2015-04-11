/**
 * DOM handling
 *
 * @todo How to make this unit better?
 */
require(['conversion.fn', 'conversion.list', "util.select", "jquery"],
    function(conversionFn, conversionList, selectWrapper, $){
        'use strict';

        var selectors = {
            concept: $("#converter-selector"),
            unit1: $("#unit1"),
            unit2: $("#unit2"),
            value1: $("#value1"),
            value2: $("#value2")
        };

        var selectedConcept = {};

        var unit1Selector = selectWrapper.create(
            selectors.unit1,
            function() {
                fromValue2ToValue1();
            }
        );

        var unit2Selector = selectWrapper.create(
            selectors.unit2,
            function() {
                fromValue1ToValue2();
            }
        );

        var convert = function(fromSelector, toSelector, fromTextBox) {
            var unitId1 = fromSelector.val();
            var unitId2 = toSelector.val();
            var fromValue = fromTextBox.val();
            return conversionFn(selectedConcept, unitId1, unitId2, fromValue);
        };

        var fromValue1ToValue2 = function() {
            var result = convert(unit1Selector, unit2Selector, selectors.value1);
            selectors.value2.val(result);
        };

        var fromValue2ToValue1 = function() {
            var result = convert(unit2Selector, unit1Selector, selectors.value2);
            selectors.value1.val(result);
        };

        selectors.value1.on("keyup", fromValue1ToValue2);
        selectors.value2.on("keyup", fromValue2ToValue1);

        var populateSelector = function(selector, list, startIndex) {
            $(list).each(function(key, concept) {
                selector.addItem(key, concept.name);
            });

            if(startIndex) {
                selector.setByIndex(startIndex);
            }
        };

        var conceptSelectorChangeCallback = function(event) {
            var selectedKey = selectors.concept.val();

            selectedConcept = conversionList[selectedKey];

            unit1Selector.removeAllItems();
            populateSelector(unit1Selector, selectedConcept.units, 0);

            unit2Selector.removeAllItems();
            populateSelector(unit2Selector, selectedConcept.units, 1);

            selectors.value1.val(1);
            fromValue1ToValue2();
        };

        var conceptSelect = selectWrapper.create(
            selectors.concept, conceptSelectorChangeCallback
        );

        populateSelector(conceptSelect, conversionList, 0);
        conceptSelectorChangeCallback();
    }
);