var current = 1;

$(document).ready(function () {

    $('#prev').click(function () {
        $('#answer_request').show();
        $('#result').hide();
        if (current > 1) {
            current--;
            $('#btn_task_' + current).click();
        }
    });

    $('#next').click(function () {
        $('#answer_request').show();
        $('#result').hide();
        if (current < n) {
            current++;
            $('#btn_task_' + current).click();
        }
    });

    $('#btn_repeat').click(function () {
        $('.page-item.active').click();
    });
});