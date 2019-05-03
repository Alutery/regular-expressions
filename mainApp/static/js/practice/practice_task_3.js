$(document).ready(function () {
  var data = [
      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = doublecircle]; A;
        node [shape = doublecircle, color = black]; D;
        node [shape = circle, color = black];
        A -> B [ label = "d" ];
        B -> C [ label = "b" ];
        C -> D [ label = "a" ];
        D -> B [ label = "d" ];
        D -> D [ label = "a" ];
      }`, // (dba*a)* - #0

      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; B;
        node [shape = circle, color = black];
        A -> B [ label = "b" ];
        A -> C [ label = "d" ];
        C -> D [ label = "b" ];
        D -> E [ label = "a" ];
        E -> C [ label = "d" ];
        E -> E [ label = "a" ];
        E -> B [ label = "b" ];
      }`, // (dba*a)*b - #1

      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; B;
        node [shape = circle, color = black];
        A -> B [ label = "b" ];
        A -> C [ label = "d" ];
        C -> D [ label = "b" ];
        D -> E [ label = "a" ];
        E -> C [ label = "d" ];
        E -> E [ label = "a" ];
        E -> B [ label = "b" ];
        B -> B [ label = "b" ];
      }`, // (dba*a)*b* - #2

      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = doublecircle]; A;
        node [shape = doublecircle, color = black]; C D;
        node [shape = circle, color = black];
        A -> B [ label = "d" ];
        B -> C [ label = "b" ];
        C -> B [ label = "d" ];
        D -> B [ label = "d" ];
        C -> D [ label = "a" ];
        D -> D [ label = "a" ];
      }`, // (dba*)* - #3

// -------------------------------------

      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; B C D;
        node [shape = circle, color = black];
        A -> C [ label = "b" ];
        A -> B [ label = "a" ];
        B -> C [ label = "b" ];
        B -> E [ label = "с" ];
        B -> D [ label = "a" ];
        D -> C [ label = "b" ];
        D -> E [ label = "c" ];
        D -> D [ label = "a" ];
        E -> D [ label = "a" ];
        E -> E [ label = "c" ];
        E -> C [ label = "b" ];
      }`, // (a(a|c)*)*(a|b) - #4

      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; D;
        node [shape = circle, color = black];
        A -> B [ label = "a" ];
        B -> C [ label = "a" ];
        B -> E [ label = "с" ];
        B -> D [ label = "b" ];
        C -> E [ label = "c" ];
        C -> D [ label = "b" ];
        C -> C [ label = "a" ];
        E -> E [ label = "c" ];
        E -> C [ label = "a" ];
      }`, // (a(a|c)*)*(ab) - #5

      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; D;
        node [shape = circle, color = black];
        A -> B [ label = "a" ];
        B -> C [ label = "a" ];
        B -> D [ label = "b" ];
        C -> E [ label = "c" ];
        C -> D [ label = "b" ];
        C -> C [ label = "a" ];
        E -> C [ label = "a" ];
      }`, // (a(ac)*)*(ab) - #6

      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; D;
        node [shape = circle, color = black];
        A -> B [ label = "a" ];
        A -> C [ label = "b" ];
        B -> D [ label = "b" ];
        C -> E [ label = "c" ];
        C -> B [ label = "a" ];
        C -> C [ label = "b" ];
        E -> C [ label = "b" ];
        E -> B [ label = "a" ];
      }`, // (bc*)*(ab) - #7

// -------------------------------------

      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; D G H;
        node [shape = circle, color = black];
        A -> B [ label = "a" ];
        A -> C [ label = "b" ];
        B -> D [ label = "b" ];
        C -> E [ label = "a" ];
        C -> F [ label = "b" ];
        F -> E [ label = "a" ];
        F -> H [ label = "b" ];
        H -> E [ label = "a" ];
        H -> H [ label = "b" ];
        E -> G [ label = "b" ];
      }`, // bb*(b|a)b|ab - #8

      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; D E G;
        node [shape = circle, color = black];
        A -> B [ label = "a" ];
        A -> C [ label = "b" ];
        B -> D [ label = "b" ];
        C -> E [ label = "b" ];
        E -> E [ label = "b" ];
        E -> F [ label = "c" ];
        F -> G [ label = "b" ];
        G -> F [ label = "c" ];
      }`, // bb*(bc)*b|ab = #9

      `digraph G { 
        rankdir=LR;
        size="8,5";
        node [color = red, shape = circle]; A;
        node [shape = doublecircle, color = black]; B D;
        node [shape = circle, color = black];
        A -> B [ label = "b" ];
        B -> D [ label = "a" ];
        B -> C [ label = "b" ];
        A -> A [ label = "a" ];
        D -> D [ label = "a" ];
        C -> D [ label = "b" ];
        C -> C [ label = "a" ];
      }`, 

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

      'digraph finite_state_machine {\
      rankdir=LR;\
      size="7"\
      node [shape = doublecircle]; s_0 s_3 s_4 s_8;\
      node [shape = circle];\
      s_0 -> s_2 [ label = "B" ];\
      s_0 -> s_1 [ label = "D" ];\
      s_1 -> s_3 [ label = "A" ];\
      s_2 -> s_6 [ label = "F" ];\
      s_2 -> s_5 [ label = "A" ];\
      s_2 -> s_4 [ label = "A, D" ];\
      s_5 -> s_7 [ label = "F" ];\
      s_5 -> s_5 [ label = "A, B, D" ];\
      s_6 -> s_6 [ label = "B" ];\
      s_6 -> s_5 [ label = "A" ];\
      s_7 -> s_8 [ label = "D" ];\
      s_7 -> s_5 [ label = "A" ];\
      s_8 -> s_6 [ label = "B" ];\
      s_8 -> s_5 [ label = "A" ];\
      }',

      'digraph G {\
      rankdir=LR;\
      size="8,5"\
      node [shape = doublecircle]; s_2;\
      node [shape = circle];\
      s_0 -> s_1 [ label = "b" ];\
      s_1 -> s_3 [ label = "a" ];\
      s_1 -> s_2 [ label = "b" ];\
      s_0 -> s_0 [ label = "a" ];\
      s_3 -> s_3 [ label = "a, b" ];\
      s_2 -> s_3 [ label = "b" ];\
      s_2 -> s_2 [ label = "a" ];\
      s_0 -> s_4 [ label = "b" ];\
      s_1 -> s_4 [ label = "c" ];\
      s_2 -> s_4 [ label = "a, c" ];\
      s_3 -> s_4 [ label = "a" ];\
      s_4 -> s_4 [ label = "a, b, c" ];}'
      ];

  var btn_1 = jQuery('#btn_task_1');
  var btn_2 = jQuery('#btn_task_2');
  var btn_3 = jQuery('#btn_task_3');
  var btn_4 = jQuery('#btn_task_4');
  var btn_5 = jQuery('#btn_task_5');

  var img_graph = ['#graph_1', '#graph_2', '#graph_3', '#graph_4'];

  var statement = $('#regex_assignment');

  var btn_accept = $('#btn_accept');
  var btn_repeat = $('#btn_repeat');

  var current_answer = 0;

  // answer = {1, 2, 3, 4}, [4 indexes for data array]
  function Update(regex_assignment, answer) {
    $('#answer_request').show();
    $('#btn_repeat').hide();
    $('#result').text('');

    // svg_div.html("<br>loaing...<br>");
    statement.text(regex_assignment);
    current_answer = answer;
    // Generate the Visualization of the Graph into "svg".

    for (var i = 1; i <= 4; i++) {
      var viz = new Viz();
      let toFind = '#graph_' + i.toString();
      viz.renderSVGElement(data[arguments[i + 1]])
        .then(function(element) {
          // console.log(typeof arguments[i + 2]);
          // console.log(typeof $(img_graph[i]));
          $(toFind).html(element);
        })
        .catch(error => {
          // Create a new Viz instance (@see Caveats page for more info)
          viz = new Viz();

          // Possibly display the error
          console.error(error);
        });
    }
  }

  // Startup function
  jQuery(function() {
    btn_1.click();
  });

  btn_accept.click(function(){
    $('#answer_request').hide();
    $('#btn_repeat').show();

    if(current_answer == $('input[name=radio]:checked', '#answer_request').val()) {
      $('#result').text('Верно!');
      $('#result').css( "color", "green" );
    }
    else {
      $('#result').text('Не верно!');
      $('#result').css( "color", "red" );
    }
  });

  btn_repeat.click(function(){
    $('li.active').click();
  });


  btn_1.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 1;
    Update('(dba*a)*', 1, 0, 1, 2, 3);
  });

  btn_2.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 2;
    Update('(dba*a)*b*', 4, 1, 3, 0, 2);
  });

  btn_3.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 3;
    Update('(a(a|c)*)*(a|b)', 3, 5, 7, 4, 6);
  });

  btn_4.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 4;
    Update('bb*(b|a)b|ab', 3, 9, 10, 8, 7);
  });

  btn_5.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 5;
    Update('(bc*)*(ab)', 1, 7, 6, 5, 4);
  });


});