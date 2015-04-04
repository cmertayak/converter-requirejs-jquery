define(function() {
    'use strict';
    return {
        name: "Mass",
        defaultDisplayUnit: 1,

        defaultUnitId: 1,

        units: [
            {
                id: 1,
                name: "Ton",
                conversion: 1
            },
            {
                id: 2,
                name: "Kilogram",
                conversion: 1000
            },
            {
                id: 3,
                name: "Gram",
                conversion: 1000000
            }
        ]
    };
});