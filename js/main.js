requirejs.config({
    baseUrl: 'js/conversion',
    paths: {
        "jquery": "//code.jquery.com/jquery-2.1.3",
        "util.select": "../utils/util.select"
    }
});

requirejs(['conversion-bindings']);
