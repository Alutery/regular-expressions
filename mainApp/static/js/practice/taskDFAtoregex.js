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
    // var current_answer = false;

    function UpdateGraphviz(data, statement_input) {
        // $('#answer_request').show();
        // $('#result').text('');
    
        svg_div.html("<br>loaing...<br>");
        statement.text(statement_input);
        // current_answer = answer;
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
          `digraph G { rankdir=LR;
          layout="circo";
          node [shape = doublecircle, color = red]; A;
          node [shape = circle, color = black];
          A -> B [ label = "a " ];
          B -> A [ label = " b " ];
          A -> C [ label = "b" ];
          C -> A [ label = "a" ];
          C -> B [ label = "b" ];}`, 
          '(ab+b(a+bb))*');
    });

    btn_2.click(function(){
      $( ".page-item" ).removeClass( "active" );
      $(this).addClass( "active" );
  
      UpdateGraphviz(
        `digraph G { 
        layout="dot";
        node [shape = circle, color = red]; A;
        node [shape = doublecircle, color = black] B, C;
        A -> B [ label = "a" ];
        A -> C [ label = "b" ];
        C -> C [ label = " a" ];
        B -> B [ label = " a" ];}`, 
        'aa*+ba*');
    });

    btn_3.click(function(){
      $( ".page-item" ).removeClass( "active" );
      $(this).addClass( "active" );

      UpdateGraphviz(
        `digraph G { rankdir=LR;
        layout="dot";
        node [shape = circle, color = red]; A;
        node [shape = doublecircle, color = black] B;
        A -> B [ label = "a" ];
        B -> A [ label = "b" ];
        A -> A [ label = "c" ];
        B -> B [ label = "d" ];}`, 
        'c*a(d+bc*a)*');
    });

    btn_4.click(function(){
      $( ".page-item" ).removeClass( "active" );
      $(this).addClass( "active" );

      UpdateGraphviz(
        `digraph G { rankdir=LR;
        layout="dot";
        node [shape = circle, color = red]; A;
        node [shape = doublecircle, color = black] B;
        A -> B [ label = "0" ];
        B -> A [ label = "1" ];}`, 
        'c*a(d+bc*a)*');
    });

    btn_5.click(function(){
      $( ".page-item" ).removeClass( "active" );
      $(this).addClass( "active" );

      UpdateGraphviz(
        `digraph G { rankdir=LR;
        layout="circo";
        node [shape = circle, color = red]; A;
        node [color = black]; B;
        node [shape = doublecircle]; C;
        A -> B [ label = "b" ];
        C -> B [ label = "a" ];
        A -> C [ label = "a" ];
        B -> B [ label = "a,b" ];}`, 
        'a*');
    });

});