define(function() {
    'use strict';
    return {
        name: "Temperature",

        units: [
            {
                id: 1,
                name: "Celsius",
                conversion: 1   // Scalar conversion constant.
                                // If it doesn't exist, conversion from/to fn's should be provided,
                                // e.g. conversionToMainUnit, conversionFromMainUnit
            },
            {
                id: 2,
                name: "Fahrenheit",
                conversionFromMainUnit: function(c) {
                    return 1.8 * c + 32;
                },
                conversionToMainUnit: function(fh) {
                    return (fh - 32) / 1.8;
                }
            },
            {
                id: 3,
                name: "Kelvin",
                conversionToMainUnit: function(k) {
                    return k - 273.15;
                },
                conversionFromMainUnit: function(c) {
                    return c + 273.15;
                }
            }
        ]
    };
});