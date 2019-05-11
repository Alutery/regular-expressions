var categoryID = 1;
var n = 5;

$(document).ready(function () {

  var btn_1 = jQuery('#btn_task_1');
  var btn_2 = jQuery('#btn_task_2');
  var btn_3 = jQuery('#btn_task_3');
  var btn_4 = jQuery('#btn_task_4');
  var btn_5 = jQuery('#btn_task_5');

  var svg_div = $('#graphviz_svg');
  var statement = $('#statement');

  var btn_yes = $('#btn_yes');
  var btn_no = $('#btn_no');
  var current_answer = false;


  function UpdateGraphviz(data, statement_input, answer) {
    $('#answer_request').show();
    $('#result').text('');

    svg_div.html("<br>loaing...<br>");
    statement.text(statement_input);
    current_answer = answer;
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

  // Startup function: call UpdateGraphviz
  jQuery(function() {
    // event.preventDefault();
    btn_1.click();
  });

  // Bind actions to form buttons.
  btn_yes.click(function(){
    $('#answer_request').hide();
    if(current_answer === true) {
      send_result(current-1, n, categoryID);
      $('#result').text('Верно!');
      $('#result').css( "color", "green" );
    }
    else {
      $('#result').text('Не верно!');
      $('#result').css( "color", "red" );
    }
  });

  btn_no.click(function(){
    $('#answer_request').hide();
    if(current_answer !== true) {
      send_result(current-1, n, categoryID);
      $('#result').text('Верно!');
      $('#result').css( "color", "green" );
    }
    else {
      $('#result').text('Не верно!');
      $('#result').css( "color", "red" );
    }
  });

  // (a+b)*
  btn_1.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 1;
    UpdateGraphviz(
      `digraph G { 
      size="8,5";
      layout="circo";
      node [shape = doublecircle, color = red]; A;
      node [shape = circle, color = black];
      A -> A [ label = " a, b" ];
      B -> A [ label = "a, b" ];
      C -> B [ label = "b" ];
      C -> A [ color = white ];
      C -> C [ label = " a" ];}`, 
      'aabba', true);
  });

  // b*(cb+a)
  btn_2.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 2;
    UpdateGraphviz(
      `digraph G { 
        layout="circo";
        rankdir=LR;
        size="8,5";
        node [shape = circle, color = red]; A;
        node [shape = doublecircle, color = black]; E;
        node [shape = circle, color = black];
        A -> C [ label = "c" ];
        A -> B [ label = "b " ];
        B -> B [ label = " b" ];
        B -> C [ label = "c" ];
        C -> D [ label = "b" ];
        D -> E [ label = "a" ];
        D -> F [ label = "b" ];
        F -> E [ label = "a " ];
        F -> F [ label = " b" ];
      }`, 
      'bbbba', true);
  });

  // (ab|b)(a|c*)
  btn_3.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 3;
    UpdateGraphviz(
      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; E F D C;
        node [shape = circle, color = black];
        A -> C [ label = "b" ];
        A -> B [ label = "a" ];
        B -> D [ label = "b" ];
        D -> F [ label = "c" ];
        C -> E [ label = "a" ];
        C -> F [ label = "c" ];
        D -> E [ label = "a" ];
        F -> E [ label = "a" ];
        F -> F [ label = "c" ];
      }`,
      'abbcc', false)
  });

  // (bb(d+a)a)*
  btn_4.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 4;
    UpdateGraphviz(
      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = doublecircle]; A;
        node [shape = doublecircle, color = black]; G;
        node [shape = circle, color = black];
        A -> B [ label = "b" ];
        B -> C [ label = "b" ];
        C -> D [ label = "d" ];
        G -> B [ label = "b" ];
        D -> F [ label = "d" ];
        D -> E [ label = "a" ];
        F -> E [ label = "a" ];
        F -> F [ label = "d" ];
        E -> G [ label = "a" ];
      }`, 
      'bbdabbaa', true);
  });

  // (d|a(b|d))*|c|a
  btn_5.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 5;
    UpdateGraphviz(
      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = doublecircle]; A;
        node [shape = doublecircle, color = black]; C B F E D;
        node [shape = circle, color = black];
        A -> D [ label = "d" ];
        A -> C [ label = "c" ];
        A -> B [ label = "a" ];
        D -> D [ label = "d" ];
        B -> F [ label = "d" ];
        B -> E [ label = "b" ];
        E -> G [ label = "a" ];
        G -> E [ label = "d" ];
        G -> F [ label = "d" ];
        F -> G [ label = "a" ];
        F -> D [ label = "d" ];
        E -> D [ label = "d" ];
        D -> G [ label = "a" ];
      }`, 
      'dabddc', false);
  });

});