define(['unit.type-checker'], function(typeChecker){
    'use strict';
    return function (widget, fromUnitId, toUnitId, amount) {
        var units = widget.units,
            amountInDefaultUnit,
            amountInTargetUnit;


        if( units[toUnitId].conversion ) {
            amountInDefaultUnit = amount * units[toUnitId].conversion;
        } else {
            amountInDefaultUnit = units[toUnitId].conversionToMainUnit(amount);
        }

        if( units[fromUnitId].conversion ) {
            amountInTargetUnit = amountInDefaultUnit / units[fromUnitId].conversion;
        } else {
            amountInTargetUnit = units[fromUnitId].conversionFromMainUnit(amountInDefaultUnit);
        }

        return amountInTargetUnit;
    };
});