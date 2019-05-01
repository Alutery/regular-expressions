$(document).ready(function () {
    // Startup function: call UpdateGraphviz
    jQuery(function() {
        btn_1.click();
    });

    var btn_1 = jQuery('#btn_task_1_1');
    var btn_2 = jQuery('#btn_task_1_2');
    var btn_3 = jQuery('#btn_task_1_3');
    var btn_4 = jQuery('#btn_task_1_4');
    var btn_5 = jQuery('#btn_task_1_5');

    var svg_div = $('#graphviz_svg');
    var statement = $('#statement');

    // var btn_accept = $('#btn_accept');
    var current_answer = false;

    function UpdateGraphviz(data, statement_input, answer) {
        // $('#answer_request').show();
        // $('#result').text('');
    
        svg_div.html("<br>loaing...<br>");
        statement.text(statement_input);
        current_answer = answer;
        $("#answer").val(statement_input);
        // Generate the Visualization of the Graph into "svg".
    
        var viz = new Viz();
        viz.renderSVGElement(data)
          .then(function(element) {
            svg_div.html(element);
          })
          .catch(error => {
            // Create a new Viz instance (@see Caveats page for more info)
            viz = new Viz();
    
            // Possibly display the error
            console.error(error);
          });
      }
    
    // btn_accept.click(function(){
    //     $('#answer_request').hide();
    //     if(current_answer === true) {
    //         $('#result').text('Верно!');
    //         $('#result').css( "color", "green" );
    //     }
    //     else {
    //         $('#result').text('Не верно!');
    //         $('#result').css( "color", "red" );
    //     }
    // });

    // $("#inputRegex").on('keyup', function (e) {
    //     if (e.keyCode == 13) {
    //         btn_accept.click();
    //     }
    // });

    btn_1.click(function(){
        $( ".page-item" ).removeClass( "active" );
        $(this).addClass( "active" );
    
        UpdateGraphviz(
          'digraph G { rankdir=LR;\
          size="8,5"\
          node [shape = doublecircle]; s_2;\
          node [shape = circle];\
          s_0 -> s_1 [ label = "b" ];\
          s_1 -> s_3 [ label = "a" ];\
          s_1 -> s_2 [ label = "b" ];\
          s_0 -> s_0 [ label = "a" ];\
          s_3 -> s_3 [ label = "a, b" ];\
          s_2 -> s_3 [ label = "b" ];\
          s_2 -> s_2 [ label = "a" ];}', 
          'a*a', false);
      });

});