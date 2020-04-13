// Class definition

var KTBootstrapMultipleSelectsplitter = function () {

    // Private functions
    var demos = function () {
        // minimum setup
        $('#sss_multipleselectsplitter_1, #sss_multipleselectsplitter_2').multiselectsplitter();
    }

    return {
        // public functions
        init: function () {
            demos();
        }
    };
}();

jQuery(document).ready(function () {
    KTBootstrapMultipleSelectsplitter.init();
});