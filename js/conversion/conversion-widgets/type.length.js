define(function() {
    'use strict';
    return {
        name: "Length",

        units: [
            {
                id: 1,
                name: "Kilometer",
                conversion: 1   // Scalar conversion constant.
                                // If it doesn't exist, conversion from/to fn's should be provided,
                                // e.g. conversionToMainUnit, conversionFromMainUnit
            },
            {
                id: 2,
                name: "Meter",
                conversion: 0.001
            },
            {
                id: 3,
                name: "Centimeter",
                conversion: 0.000001    // From this unit to main
            }
        ]
    };
});