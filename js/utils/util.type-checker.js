define(function() {
    return {
        'isFn': function (varToCheck) {
            var getType = {};
            return varToCheck && getType.toString.call(varToCheck) === '[object Function]';
        }
    }
});
