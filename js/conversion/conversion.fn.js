define(function(){
    'use strict';
    return function (widget, fromUnitId, toUnitId, amount) {
        var units = widget.units,
            amountInMainUnit,
            amountInTargetUnit;

        if( units[fromUnitId].conversion ) {
            amountInMainUnit = amount * units[fromUnitId].conversion;
        } else {
            amountInMainUnit = units[fromUnitId].conversionToMainUnit(amount);
        }

        if( units[toUnitId].conversion ) {
            amountInTargetUnit = amountInMainUnit / units[toUnitId].conversion;
        } else {
            amountInTargetUnit = units[toUnitId].conversionFromMainUnit(amountInMainUnit);
        }

        return amountInTargetUnit;
    };
});