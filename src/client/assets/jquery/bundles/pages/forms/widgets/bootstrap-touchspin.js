"use strict";
// Class definition
var KTKBootstrapTouchspin = function () {

    // Private functions
    var demos = function () {
        // minimum setup
        $('#sss_touchspin_1, #sss_touchspin_2_1').TouchSpin({
            buttondown_class: 'btn btn-secondary',
            buttonup_class: 'btn btn-secondary',

            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
        });

        // with prefix
        $('#sss_touchspin_2, #sss_touchspin_2_2').TouchSpin({
            buttondown_class: 'btn btn-secondary',
            buttonup_class: 'btn btn-secondary',

            min: -1000000000,
            max: 1000000000,
            stepinterval: 50,
            maxboostedstep: 10000000,
            prefix: '$'
        });

        // vertical button alignment:
        $('#sss_touchspin_3, #sss_touchspin_2_3').TouchSpin({
            buttondown_class: 'btn btn-secondary',
            buttonup_class: 'btn btn-secondary',

            min: -1000000000,
            max: 1000000000,
            stepinterval: 50,
            maxboostedstep: 10000000,
            postfix: '$'
        });

        // vertical buttons with custom icons:
        $('#sss_touchspin_4, #sss_touchspin_2_4').TouchSpin({
            buttondown_class: 'btn btn-secondary',
            buttonup_class: 'btn btn-secondary',
            verticalbuttons: true,
            verticalup: '<i class="la la-plus"></i>',
            verticaldown: '<i class="la la-minus"></i>'
        });

        // vertical buttons with custom icons:
        $('#sss_touchspin_5, #sss_touchspin_2_5').TouchSpin({
            buttondown_class: 'btn btn-secondary',
            buttonup_class: 'btn btn-secondary',
            verticalbuttons: true,
            verticalup: '<i class="la la-angle-up"></i>',
            verticaldown: '<i class="la la-angle-down"></i>'
        });
    }

    var validationStateDemos = function () {
        // validation state demos
        $('#sss_touchspin_1_validate').TouchSpin({
            buttondown_class: 'btn btn-secondary',
            buttonup_class: 'btn btn-secondary',

            min: -1000000000,
            max: 1000000000,
            stepinterval: 50,
            maxboostedstep: 10000000,
            prefix: '$'
        });

        // vertical buttons with custom icons:
        $('#sss_touchspin_2_validate').TouchSpin({
            buttondown_class: 'btn btn-secondary',
            buttonup_class: 'btn btn-secondary',

            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
        });

        $('#sss_touchspin_3_validate').TouchSpin({
            buttondown_class: 'btn btn-secondary',
            buttonup_class: 'btn btn-secondary',
            verticalbuttons: true,
            verticalupclass: 'la la-plus',
            verticaldownclass: 'la la-minus'
        });
    }

    return {
        // public functions
        init: function () {
            demos();
            validationStateDemos();
        }
    };
}();

jQuery(document).ready(function () {
    KTKBootstrapTouchspin.init();
});