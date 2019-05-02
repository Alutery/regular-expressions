var current = 1;

$(document).ready(function () {
    var max = 5;

    var btn_prev = $('#prev');
    var btn_next = $('#next');

    btn_prev.click(function() {
        console.log(current);
        if(current > 1) {
            current--;
            $('#btn_task_' + current).click();
        }
    });

    btn_next.click(function() {
        console.log(current);
        if(current < max) {
            current++;
            $('#btn_task_' + current).click();
        }
    });
});