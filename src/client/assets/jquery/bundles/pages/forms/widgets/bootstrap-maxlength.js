// Class definition

var KTBootstrapMaxlength = function () {

    // Private functions
    var demos = function () {
        // minimum setup
        $('#vqn_maxlength_1').maxlength({
            warningClass: "vqn-badge vqn-badge--warning vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--success vqn-badge--rounded vqn-badge--inline"
        });

        // threshold value
        $('#vqn_maxlength_2').maxlength({
            threshold: 5,
            warningClass: "vqn-badge vqn-badge--danger vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--success vqn-badge--rounded vqn-badge--inline"
        });

        // always show
        $('#vqn_maxlength_3').maxlength({
            alwaysShow: true,
            threshold: 5,
            warningClass: "vqn-badge vqn-badge--primary vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--brand vqn-badge--rounded vqn-badge--inline"
        });

        // custom text
        $('#vqn_maxlength_4').maxlength({
            threshold: 3,
            warningClass: "vqn-badge vqn-badge--danger vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--success vqn-badge--rounded vqn-badge--inline",
            separator: ' of ',
            preText: 'You have ',
            postText: ' chars remaining.',
            validate: true
        });

        // textarea example
        $('#vqn_maxlength_5').maxlength({
            threshold: 5,
            warningClass: "vqn-badge vqn-badge--primary vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--brand vqn-badge--rounded vqn-badge--inline"
        });

        // position examples
        $('#vqn_maxlength_6_1').maxlength({
            alwaysShow: true,
            threshold: 5,
            placement: 'top-left',
            warningClass: "vqn-badge vqn-badge--brand vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--brand vqn-badge--rounded vqn-badge--inline"
        });

        $('#vqn_maxlength_6_2').maxlength({
            alwaysShow: true,
            threshold: 5,
            placement: 'top-right',
            warningClass: "vqn-badge vqn-badge--success vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--brand vqn-badge--rounded vqn-badge--inline"
        });

        $('#vqn_maxlength_6_3').maxlength({
            alwaysShow: true,
            threshold: 5,
            placement: 'bottom-left',
            warningClass: "vqn-badge vqn-badge--warning vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--brand vqn-badge--rounded vqn-badge--inline"
        });

        $('#vqn_maxlength_6_4').maxlength({
            alwaysShow: true,
            threshold: 5,
            placement: 'bottom-right',
            warningClass: "vqn-badge vqn-badge--danger vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--brand vqn-badge--rounded vqn-badge--inline"
        });

        // Modal Examples

        // minimum setup
        $('#vqn_maxlength_1_modal').maxlength({
            warningClass: "vqn-badge vqn-badge--warning vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--success vqn-badge--rounded vqn-badge--inline",
            appendToParent: true
        });

        // threshold value
        $('#vqn_maxlength_2_modal').maxlength({
            threshold: 5,
            warningClass: "vqn-badge vqn-badge--danger vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--success vqn-badge--rounded vqn-badge--inline",
            appendToParent: true
        });

        // always show
        // textarea example
        $('#vqn_maxlength_5_modal').maxlength({
            threshold: 5,
            warningClass: "vqn-badge vqn-badge--primary vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--brand vqn-badge--rounded vqn-badge--inline",
            appendToParent: true
        });

        // custom text
        $('#vqn_maxlength_4_modal').maxlength({
            threshold: 3,
            warningClass: "vqn-badge vqn-badge--danger vqn-badge--rounded vqn-badge--inline",
            limitReachedClass: "vqn-badge vqn-badge--success vqn-badge--rounded vqn-badge--inline",
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