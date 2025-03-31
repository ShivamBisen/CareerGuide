// Variable to hold request
var request;

// Bind to the submit event of our form
$("#ajax-form").submit(function (event) {

    toggleFormStatusDisplay('hide');

    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: `https://script.google.com/macros/s/${event.target.getAttribute('data-id')}/exec`,
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR) {
        // Log a message to the console
        $('#page-status span').text('Your form has been submitted. Thank You!');
        $('#page-status').removeClass('alert-danger');
        $('#page-status').addClass('alert-success');
        $('#ajax-form input').add('#ajax-form textarea').val('');
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown) {
        // Log the error to the console
        console.error(
            "The following error occurred: " +
            textStatus, errorThrown
        );
        $('#page-status span').text('Oops! An error occured!');
        $('#page-status').addClass('alert-danger');
        $('#page-status').removeClass('alert-success');
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        toggleFormStatusDisplay();
        $("html, body").animate({
            scrollTop: $('#page-status').offset().top
        }, 1000);
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
}); 