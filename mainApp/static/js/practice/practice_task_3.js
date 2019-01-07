$(document).ready(function () {
  var data = [
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
      s_4 -> s_4 [ label = "a, b, c" ];}', 

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
  // Installs error handling.
  // jQuery.ajaxSetup({
  // error: function(resp, e) {
  //   if (resp.status == 0){
  //     alert('You are offline!!\n Please Check Your Network.');
  //     } else if (resp.status == 404){
  //       alert('Requested URL not found.');
  //     } else if (resp.status == 500){
  //       alert('Internel Server Error:\n\t' + resp.responseText);
  //     } else if (e == 'parsererror') {
  //       alert('Error.\nParsing JSON Request failed.');
  //     } else if (e == 'timeout') {
  //       alert('Request timeout.');
  //     } else {
  //       alert('Unknown Error.\n' + resp.responseText);
  //     }
  //   }
  // });  // error:function()

  // var generate_btn = jQuery('#generate_btn');
  var btn_1 = jQuery('#btn_task_3_1');
  var btn_2 = jQuery('#btn_task_3_2');
  var btn_3 = jQuery('#btn_task_3_3');
  var btn_4 = jQuery('#btn_task_3_4');
  var btn_5 = jQuery('#btn_task_3_5');

  var img_graph = ['#graph_1', '#graph_2', '#graph_3', '#graph_4'];

  var statement = $('#regex_assignment');

  var btn_accept = $('#btn_accept');
  var btn_repeat = $('#btn_repeat');

  var current_answer = 0;


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

  // Startup function: call UpdateGraphviz
  jQuery(function() {
    btn_1.click();
  });

  // Bind actions to form buttons.

  btn_accept.click(function(){
    $('#answer_request').hide();
    $('#btn_repeat').show();
    if(current_answer == $('input[name=radioName]:checked', '#answer_request').val()
) {
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

    Update('aabba', 2, 1, 3, 4, 1);
  });

  btn_2.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );

    Update('aab*ba+', 1, 3, 3, 1, 1);
  });

  btn_3.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );

    Update('aAA*a', 2, 1, 1, 1, 1);
  });

  btn_4.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );

    Update('a+', 4, 2, 3, 2, 3);
  });

  btn_5.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );

    Update('SS.S.', 3, 1, 1, 1, 4);
  });


});