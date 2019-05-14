var current = 1;

$(document).ready(function () {
    var btn_prev = $('#prev');
    var btn_next = $('#next');

    btn_prev.click(function () {
        $('#answer_request').show();
        $('#result').hide();
        if (current > 1) {
            current--;
            $('#btn_task_' + current).click();
        }
    });

    btn_next.click(function () {
        $('#answer_request').show();
        $('#result').hide();
        if (current < n) {
            current++;
            $('#btn_task_' + current).click();
        }
    });
});