$(document).ready(function () {
    $('#popupLogin').on('show.bs.modal', function (event) {

        var button = $(event.relatedTarget) // Button that triggered the modal
        var recipient = button.data('whatever') // Extract info from data-* attributes

        if (recipient == "@reg") {

            $('#log-nav-item').removeClass('active');
            $('#reg-nav-item').addClass('active');

            $('#register').addClass('active');
            $('#login').removeClass('active');

            $('#register').addClass('show');
            $('#login').removeClass('show');
            
        } else if (recipient == "@log") {

            $('#reg-nav-item').removeClass('active');
            $('#log-nav-item').addClass('active');

            $('#register').removeClass('active');
            $('#login').addClass('active');

            $('#register').removeClass('show');
            $('#login').addClass('show');
        }
    });
});