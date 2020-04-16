// Class definition

var KTBootstrapTimepicker = function () {

    // Private functions
    var demos = function () {
        // minimum setup
        $('#vqn_timepicker_1, #vqn_timepicker_1_modal').timepicker();

        // minimum setup
        $('#vqn_timepicker_2, #vqn_timepicker_2_modal').timepicker({
            minuteStep: 1,
            defaultTime: '',
            showSeconds: true,
            showMeridian: false,
            snapToStep: true
        });

        // default time
        $('#vqn_timepicker_3, #vqn_timepicker_3_modal').timepicker({
            defaultTime: '11:45:20 AM',
            minuteStep: 1,
            showSeconds: true,
            showMeridian: true
        });

        // default time
        $('#vqn_timepicker_4, #vqn_timepicker_4_modal').timepicker({
            defaultTime: '10:30:20 AM',
            minuteStep: 1,
            showSeconds: true,
            showMeridian: true
        });

        // validation state demos
        // minimum setup
        $('#vqn_timepicker_1_validate, #vqn_timepicker_2_validate, #vqn_timepicker_3_validate').timepicker({
            minuteStep: 1,
            showSeconds: true,
            showMeridian: false,
            snapToStep: true
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
    KTBootstrapTimepicker.init();
});