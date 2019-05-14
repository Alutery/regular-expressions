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



$(document).ready(function () {
    var n = parseInt($('#nnn').text(), 10);
    var statement = $('#statement');
    var svg_div = $('#graphviz_svg');

    function UpdateGraphviz(data, regex) {
        svg_div.html("<br>loaing...<br>");
        $('#inputRegex_result').text('Вы ввели: ' + regex);
        var viz = new Viz();
        viz.renderSVGElement(data)
          .then(function (element) {
            svg_div.html(element);
          })
          .catch(error => {
            viz = new Viz();
            console.error(error);
          });
    }

    $("#btn_accept").click(function () {
        var inputRegex = $('#inputRegex').val();

        if (inputRegex == "" || inputRegex == null) {
            alert("Введите регулярное выражение в поле.");
            return false;
        }
        event.preventDefault();

        $.ajax({
            async: false,
            url: '',
            type: 'post',
            data: ({
                input: inputRegex
            }),

            success: function (data) {
                if (data.correct == true) {
                    $('#input_request').hide();
                    $('#display_automate').show();
                    UpdateGraphviz(data.dotFile, inputRegex);
                }
                else {
                    alert('Неверный ввод!')
                }
            }
        });
    });

    $('#btn_check').click(function() {
        var inputWord = $('#inputWord').val();

        if (inputWord == "" || inputWord == null) {
            alert("Введите регулярное выражение в поле.");
            return false;
        }
        event.preventDefault();

        $.ajax({
            async: false,
            url: '',
            type: 'post',
            data: ({
                input: inputWord
            }),

            success: function (data) {
                if (data.correct == true) {
                    
                }
                else {
                    alert('Неверный ввод!')
                }
            }
        });
    });

});