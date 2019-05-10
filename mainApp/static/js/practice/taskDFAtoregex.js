var categoryID = 6;
var n = 5;

function btnClick(){
event.preventDefault();
return false;
}

$(document).ready(function () {
    // Startup function: call UpdateGraphviz
    jQuery(function() {
        btn_1.click();
    });

    $("#btn_accept").click(function (event) {

      var inputRegex = $('#inputRegex').val();

      if(inputRegex=="" || inputRegex==null) { 
        alert("Введите ответ");
        return false;
      }
      event.preventDefault();
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
      return false;

    });

    var btn_1 = jQuery('#btn_task_1');
    var btn_2 = jQuery('#btn_task_2');
    var btn_3 = jQuery('#btn_task_3');
    var btn_4 = jQuery('#btn_task_4');
    var btn_5 = jQuery('#btn_task_5');

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
    
    btn_1.click(function(){
        $( ".page-item" ).removeClass( "active" );
        $(this).addClass( "active" );
        current = 1;

        $('#answer_request').show();
        $('#result').hide();
    
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
          'aa*');
    });

    btn_2.click(function(){
      $( ".page-item" ).removeClass( "active" );
      $(this).addClass( "active" );
      current = 2;

      $('#answer_request').show();
      $('#result').hide();
      
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
      current = 3;

      $('#answer_request').show();
      $('#result').hide();

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
      current = 4;

      $('#answer_request').show();
      $('#result').hide();

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
      current = 5;

      $('#answer_request').show();
      $('#result').hide();

      UpdateGraphviz(
        `digraph G { 
         rankdir=LR;
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