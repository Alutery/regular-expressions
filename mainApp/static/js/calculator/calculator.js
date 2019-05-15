
$(document).ready(function () {
    var inputRegex;
    var svg_div = $('#graphviz_svg');

    function UpdateGraphviz(data, regex) {
        svg_div.html("<br>loaing...<br>");
        if(regex != "")
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

    function animate(data) {

        console.log(data);
        var image_number = 0;
        var timerId = setInterval(
            function () {
                UpdateGraphviz(data[image_number], "");
                image_number++;
                if (image_number >= data.length) {
                    clearTimeout(timerId);
                }
            }, 2000);
        
        $('#btn_check').prop('disabled', false);
    }

    $("#btn_accept").click(function () {
        inputRegex = $('#inputRegex').val();

        if (inputRegex == "" || inputRegex == null) {
            alert("Введите регулярное выражение.");
            return false;
        }
        event.preventDefault();
        $('#btn_accept').prop('disabled', true);

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
                } else {
                    $('#btn_accept').prop('disabled', false);
                    alert('Неверный ввод!');
                }
            }
        });
    });

    $('#btn_check').click(function () {
        var inputWord = $('#inputWord').val();

        if (inputWord == "" || inputWord == null) {
            alert("Введите слово.");
            return false;
        }
        event.preventDefault();
        $('#btn_check').attr('disabled', true);

        $.ajax({
            async: false,
            url: '/calculator/check/',
            type: 'post',
            data: ({
                input: inputRegex,
                word: inputWord
            }),

            success: function (data) {
                if (data.correct == true) {
                    animate(data.actions);
                } else {
                    $('#btn_check').attr('disabled', false);
                    alert('Неверный ввод!')
                }
            }
        });
    });

});