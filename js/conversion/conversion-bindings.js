require(['conversion.fn', 'conversion.list', "util.select", "jquery"],
    function(conversionFn, conversionList, selectItem, $){
        'use strict';

        var concepts = {
            selector: $("#converter-selector"),
            unit1Selector: $("#unit1"),
            unit2Selector: $("#unit2")
        };

        var unit1Selector = selectItem.init(
            concepts.unit1Selector,
            function() { console.log("1"); }
        );

        var unit2Selector = selectItem.init(
            concepts.unit2Selector,
            function() { console.log("2"); }
        );

        var populateSelector = function(selector, list) {
            $(list).each(function(key, concept){
                selector.addItem(key, concept.name);
            });
        };

        selectItem.init(concepts.selector, function(event) {
            var selectedKey = concepts.selector.val();
            var selectedConcept = conversionList[selectedKey];

            unit1Selector.removeAllItems();
            populateSelector(unit1Selector, selectedConcept.units);

            unit2Selector.removeAllItems();
            populateSelector(unit2Selector, selectedConcept.units);
        });

        populateSelector(selectItem, conversionList);
    }
);