// Class definition

var KTBootstrapMaxlength = function () {

    // Private functions
    var demos = function () {
        // minimum setup
        $('#sss_maxlength_1').maxlength({
            warningClass: "sss-badge sss-badge--warning sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--success sss-badge--rounded sss-badge--inline"
        });

        // threshold value
        $('#sss_maxlength_2').maxlength({
            threshold: 5,
            warningClass: "sss-badge sss-badge--danger sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--success sss-badge--rounded sss-badge--inline"
        });

        // always show
        $('#sss_maxlength_3').maxlength({
            alwaysShow: true,
            threshold: 5,
            warningClass: "sss-badge sss-badge--primary sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--brand sss-badge--rounded sss-badge--inline"
        });

        // custom text
        $('#sss_maxlength_4').maxlength({
            threshold: 3,
            warningClass: "sss-badge sss-badge--danger sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--success sss-badge--rounded sss-badge--inline",
            separator: ' of ',
            preText: 'You have ',
            postText: ' chars remaining.',
            validate: true
        });

        // textarea example
        $('#sss_maxlength_5').maxlength({
            threshold: 5,
            warningClass: "sss-badge sss-badge--primary sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--brand sss-badge--rounded sss-badge--inline"
        });

        // position examples
        $('#sss_maxlength_6_1').maxlength({
            alwaysShow: true,
            threshold: 5,
            placement: 'top-left',
            warningClass: "sss-badge sss-badge--brand sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--brand sss-badge--rounded sss-badge--inline"
        });

        $('#sss_maxlength_6_2').maxlength({
            alwaysShow: true,
            threshold: 5,
            placement: 'top-right',
            warningClass: "sss-badge sss-badge--success sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--brand sss-badge--rounded sss-badge--inline"
        });

        $('#sss_maxlength_6_3').maxlength({
            alwaysShow: true,
            threshold: 5,
            placement: 'bottom-left',
            warningClass: "sss-badge sss-badge--warning sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--brand sss-badge--rounded sss-badge--inline"
        });

        $('#sss_maxlength_6_4').maxlength({
            alwaysShow: true,
            threshold: 5,
            placement: 'bottom-right',
            warningClass: "sss-badge sss-badge--danger sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--brand sss-badge--rounded sss-badge--inline"
        });

        // Modal Examples

        // minimum setup
        $('#sss_maxlength_1_modal').maxlength({
            warningClass: "sss-badge sss-badge--warning sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--success sss-badge--rounded sss-badge--inline",
            appendToParent: true
        });

        // threshold value
        $('#sss_maxlength_2_modal').maxlength({
            threshold: 5,
            warningClass: "sss-badge sss-badge--danger sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--success sss-badge--rounded sss-badge--inline",
            appendToParent: true
        });

        // always show
        // textarea example
        $('#sss_maxlength_5_modal').maxlength({
            threshold: 5,
            warningClass: "sss-badge sss-badge--primary sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--brand sss-badge--rounded sss-badge--inline",
            appendToParent: true
        });

        // custom text
        $('#sss_maxlength_4_modal').maxlength({
            threshold: 3,
            warningClass: "sss-badge sss-badge--danger sss-badge--rounded sss-badge--inline",
            limitReachedClass: "sss-badge sss-badge--success sss-badge--rounded sss-badge--inline",
            appendToParent: true,
            separator: ' of ',
            preText: 'You have ',
            postText: ' chars remaining.',
            validate: true
        });
    }

    return {
        // public functions
        init: function () {
            demos();
        }
    };
}();

jQuery(document).ready(function () {
    KTBootstrapMaxlength.init();
});