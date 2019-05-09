var categoryID = 2;
var n = 5;

$(document).ready(function () {
    // Startup function: call UpdateGraphviz
    jQuery(function() {
        btn_1.click();
    });

    $("#btn_accept").bind("click", function () {
        event.preventDefault();
  
        var inputRegex = $('#inputRegex').val();
        var answerRegex = $('#answer').val();
  
        $('#inputRegex').val('');
  
        $.ajax({
            url: '../validate_regex/',
            type: 'get',
            data: ({ input: inputRegex, answer: answerRegex }),
            beforeSend: function(){
                $('#answer_request').hide();
                $('#result').show();
                $('#result').text('Обработка..');
            },
            success: function(data) {
                $('#result').html(data.correctness);
                if(data.correct == true) {
                  send_result(current-1, n, categoryID);
                }
            },
            error: function(xhr,errmsg,err){
                $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                  " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
            }
        });
  
      });

    max = 5;

    var btn_1 = jQuery('#btn_task_1');
    var btn_2 = jQuery('#btn_task_2');
    var btn_3 = jQuery('#btn_task_3');
    var btn_4 = jQuery('#btn_task_4');
    var btn_5 = jQuery('#btn_task_5');

    var description = $('#description');
    var statement = $('#statement');

    // var btn_accept = $('#btn_accept');
    // var current_answer = false;

    function Update(data, statement_input) {
        description.text(data);
        $("#answer").val(statement_input);
    }
    
    btn_1.click(function(){
        $( ".page-item" ).removeClass( "active" );
        $(this).addClass( "active" );
        current = 1;
        Update(
            `Включает только три цепочки: a, b и cbbab, т.е. язык = { "a", "b", "cbba" }`, 
            'a+b+cbbab');
    });

    btn_2.click(function(){
        $( ".page-item" ).removeClass( "active" );
        $(this).addClass( "active" );
        current = 2;
        Update(
            `Все цепочки из а и b (включая ε), в которых b входят только парами.`, 
            '(a + bb)');
    });

    btn_3.click(function(){
        $( ".page-item" ).removeClass( "active" );
        $(this).addClass( "active" );
        current = 3;
        Update(
            `Язык включает все цепочки из 0 и 1 (в том числе ε), которые оканчиваются цепочкой 10010.`, 
            '(0+1)*10010');
    });
    
    btn_4.click(function(){
        $( ".page-item" ).removeClass( "active" );
        $(this).addClass( "active" );
        current = 4;
        Update(
            `Все цепочки из а и b (включая ε), которые содержат точно два вхождения b.`, 
            'a*ba*ba*');
    });
    
    btn_5.click(function(){
        $( ".page-item" ).removeClass( "active" );
        $(this).addClass( "active" );
        current = 5;
        Update(
            `Все цепочки из а и b (включая ε), которые содержат по крайней мере одну пару рядом стоящих а или b.`, 
            '(a+b)*(aa+bb) (a+b)*');
    });

});