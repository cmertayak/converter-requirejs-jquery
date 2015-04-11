define(function() {
    'use strict';
    return {
        name: "Mass",

        units: [
            {
                id: 1,
                name: "Ton",
                conversion: 1
            },
            {
                id: 2,
                name: "Kilogram",
                conversion: 0.001
            },
            {
                id: 3,
                name: "Gram",
                conversion: 0.000001
            }
        ]
    };
});