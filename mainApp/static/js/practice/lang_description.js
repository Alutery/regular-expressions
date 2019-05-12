var statements;
var numbers;
var answers;
var categoryID = 'LangDescription';
var number;


function getData() {
    $.ajax({
        async: false,
        url: '../gettask/',
        type: 'post',
        data: ({
            taskType: categoryID
        }),
        success: function (data) {
            statements = data.description;
            numbers = data.numbers;
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}


function Update(data, numberID) {
    $('#description').text(data);
    number = numberID;
}


$(document).ready(function () {
    var n = parseInt($('#nnn').text(), 10);
    var statement = $('#statement');


    jQuery(function () {
        getData();

        for (let i = 1; i <= n; i++) {
            $('#btn_task_' + i).click(function () {
                $(".page-item").removeClass("active");
                $(this).addClass("active");

                $('#answer_request').show();
                $('#result').hide();

                current = i;
                Update(statements[i - 1], numbers[i - 1]);
            });
        }

        $('#btn_task_1').click();
    });

    $("#btn_accept").click(function () {
        var inputRegex = $('#inputRegex').val();

        if (inputRegex == "" || inputRegex == null) {
            alert("Введите ответ");
            return false;
        }
        event.preventDefault();

        $('#inputRegex').val('');
        $('#answer_request').hide();
        $('#result').show();
        $('#result').text('Обработка..');

        $.ajax({
            async: false,
            url: '',
            type: 'post',
            data: ({
                number: number,
                taskType: categoryID,
                input: inputRegex
            }),

            success: function (data) {
                $('#result').html(data.correctness);
                if (data.correct == true) {
                    send_result(current - 1, n, categoryID);
                }
            },
            error: function (xhr, errmsg, err) {
                $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: " + errmsg +
                    " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });

    });

});