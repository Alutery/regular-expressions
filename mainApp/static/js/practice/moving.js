$(document).ready(function () {
    var current = 1;
    var max = 5;

    var btn_prev = $('#prev');
    var btn_next = $('#next');

    btn_prev.click(function() {
        if(current > 1) {
            current--;
            $('#btn_task_' + current).click();
        }
    });

    btn_next.click(function() {
        if(current < max) {
            current++;
            $('#btn_task_' + current).click();
        }
    });
});