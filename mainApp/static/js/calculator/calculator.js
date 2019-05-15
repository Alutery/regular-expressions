
$(document).ready(function () {

    $(window).keydown(function(event){
        if(event.keyCode == 13) {
          event.preventDefault();
          return false;
        }
    });

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

        var image_number = 0;
        var timerId = setInterval(
            function () {
                UpdateGraphviz(data[image_number], "");
                image_number++;
                if (image_number >= data.length) {
                    clearTimeout(timerId);
                    $('#btn_check').attr('disabled', false);
                }
            }, 1300);
        
    }

    $("#btn_accept").click(function () {
        inputRegex = $('#inputRegex').val();

        if (inputRegex == "" || inputRegex == null) {
            alert("Введите регулярное выражение.");
            return false;
        }
 
        $('#btn_accept').attr('disabled', true);

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
                    $('#btn_accept').attr('disabled', false);
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
                if (data.correct == '2') {
                    alert('Ошибка');
                    $('#btn_check').attr('disabled', false);
                }
                else if (data.correct == true) {
                    alert('Допускает');
                    animate(data.actions);
                } else {
                    alert('Не допускает');
                    animate(data.actions);
                }
            }
        });
    });
});