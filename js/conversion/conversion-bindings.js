require(['conversion.fn', 'conversion.list', "util.select", "jquery"],
    function(conversionFn, conversionList, selectItem, $){
        'use strict';
        selectItem.init($("#converter-selector"), function() { console.log('changed..'); });

        $.each(
            $(conversionList),
            function(key, concept){
                selectItem.addItem(concept.name, concept.name);
            }
        );

    }
);