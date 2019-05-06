var current = 1;
var max = 5;

$(document).ready(function () {
    var btn_prev = $('#prev');
    var btn_next = $('#next');

    btn_prev.click(function() {
        // console.log(current);
        $('#answer_request').show();
        $('#result').hide();
        if(current > 1) {
            current--;
            $('#btn_task_' + current).click();
        }
    });

    btn_next.click(function() {
        // console.log(current);
        $('#answer_request').show();
        $('#result').hide();
        if(current < max) {
            current++;
            $('#btn_task_' + current).click();
        }
    });
});