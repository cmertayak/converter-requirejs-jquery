define(function() {
    'use strict';
    return {
        name: "Length",

        units: [
            {
                id: 1,
                name: "Kilometer",
                conversion: 1
            },
            {
                id: 2,
                name: "Meter",
                conversion: 1000
            },
            {
                id: 3,
                name: "Centimeter",
                conversion: 1000000
            }
        ]
    };
});