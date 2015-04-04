define(function(){
    'use strict';
    return function (widget, fromUnitId, toUnitId, amount) {
        var defaultUnitId = widget.defaultUnitId;
        var units = widget.units;
        var amountInDefaultUnit = amount * units[fromUnitId].conversion;
        return amountInDefaultUnit / units[toUnitId].conversion;
    };
});