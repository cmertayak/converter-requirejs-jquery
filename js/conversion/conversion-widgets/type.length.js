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
                conversionToMainUnit: function(kilometers) {
                    return kilometers * 1000
                },
                conversionFromMainUnit: function(meters) {
                    return meters / 1000;
                }
            },
            {
                id: 3,
                name: "Centimeter",
                conversion: 1000000
            }
        ]
    };
});