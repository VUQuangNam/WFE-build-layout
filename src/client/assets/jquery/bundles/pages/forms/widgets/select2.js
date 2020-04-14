// Class definition
var KTSelect2 = function () {
    // Private functions
    var demos = function () {
        // basic
        $('#sss_select2_1, #sss_select2_1_validate').select2({
            placeholder: "Select a state"
        });

        // nested
        $('#sss_select2_2, #sss_select2_2_validate').select2({
            placeholder: "Select a state"
        });

        // multi select
        $('#sss_select2_3, #sss_select2_3_validate').select2({
            placeholder: "Select a state",
        });

        // basic
        $('#sss_select2_4').select2({
            placeholder: "Select a state",
            allowClear: true
        });

        // loading data from array
        var data = [{
            id: 0,
            text: 'Enhancement'
        }, {
            id: 1,
            text: 'Bug'
        }, {
            id: 2,
            text: 'Duplicate'
        }, {
            id: 3,
            text: 'Invalid'
        }, {
            id: 4,
            text: 'Wontfix'
        }];

        $('#sss_select2_5').select2({
            placeholder: "Select a value",
            data: data
        });

        // loading remote data

        function formatRepo(repo) {
            if (repo.loading) return repo.text;
            var markup = "<div class='select2-result-repository clearfix'>" +
                "<div class='select2-result-repository__meta'>" +
                "<div class='select2-result-repository__title'>" + repo.full_name + "</div>";
            if (repo.description) {
                markup += "<div class='select2-result-repository__description'>" + repo.description + "</div>";
            }
            markup += "<div class='select2-result-repository__statistics'>" +
                "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " + repo.forks_count + " Forks</div>" +
                "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " + repo.stargazers_count + " Stars</div>" +
                "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " + repo.watchers_count + " Watchers</div>" +
                "</div>" +
                "</div></div>";
            return markup;
        }

        function formatRepoSelection(repo) {
            return repo.full_name || repo.text;
        }

        $("#sss_select2_6").select2({
            placeholder: "Search for git repositories",
            allowClear: true,
            ajax: {
                url: "https://api.github.com/search/repositories",
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    return {
                        q: params.term, // search term
                        page: params.page
                    };
                },
                processResults: function (data, params) {
                    // parse the results into the format expected by Select2
                    // since we are using custom formatting functions we do not need to
                    // alter the remote JSON data, except to indicate that infinite
                    // scrolling can be used
                    params.page = params.page || 1;

                    return {
                        results: data.items,
                        pagination: {
                            more: (params.page * 30) < data.total_count
                        }
                    };
                },
                cache: true
            },
            escapeMarkup: function (markup) {
                return markup;
            }, // let our custom formatter work
            minimumInputLength: 1,
            templateResult: formatRepo, // omitted for brevity, see the source of this page
            templateSelection: formatRepoSelection // omitted for brevity, see the source of this page
        });

        // custom styles

        // tagging support
        $('#sss_select2_12_1, #sss_select2_12_2, #sss_select2_12_3, #sss_select2_12_4').select2({
            placeholder: "Select an option",
        });

        // disabled mode
        $('#sss_select2_7').select2({
            placeholder: "Select an option"
        });

        // disabled results
        $('#sss_select2_8').select2({
            placeholder: "Select an option"
        });

        // limiting the number of selections
        $('#sss_select2_9').select2({
            placeholder: "Select an option",
            maximumSelectionLength: 2
        });

        // hiding the search box
        $('#sss_select2_10').select2({
            placeholder: "Select an option",
            minimumResultsForSearch: Infinity
        });

        // tagging support
        $('#sss_select2_11').select2({
            placeholder: "Add a tag",
            tags: true
        });

        // disabled results
        $('.vqn-select2-general').select2({
            placeholder: "Select an option"
        });
    }

    var modalDemos = function () {
        $('#sss_select2_modal').on('shown.bs.modal', function () {
            // basic
            $('#sss_select2_1_modal').select2({
                placeholder: "Select a state"
            });

            // nested
            $('#sss_select2_2_modal').select2({
                placeholder: "Select a state"
            });

            // multi select
            $('#sss_select2_3_modal').select2({
                placeholder: "Select a state",
            });

            // basic
            $('#sss_select2_4_modal').select2({
                placeholder: "Select a state",
                allowClear: true
            });
        });
    }

    // Public functions
    return {
        init: function () {
            demos();
            modalDemos();
        }
    };
}();

// Initialization
jQuery(document).ready(function () {
    KTSelect2.init();
});