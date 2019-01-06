$(document).ready(function () {

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
  var btn_1 = jQuery('#btn_task_1_1');
  var btn_2 = jQuery('#btn_task_1_2');
  var btn_3 = jQuery('#btn_task_1_3');
  var btn_4 = jQuery('#btn_task_1_4');
  var btn_5 = jQuery('#btn_task_1_5');

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
    btn_1.click();
  });

  // Bind actions to form buttons.

  btn_yes.click(function(){
    $('#answer_request').hide();
    if(current_answer === true) {
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
      $('#result').text('Верно!');
      $('#result').css( "color", "green" );
    }
    else {
      $('#result').text('Не верно!');
      $('#result').css( "color", "red" );
    }
  });

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
      'aabba', true);
  });

  btn_2.click(function(){
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
      'abab', true);
  });

  btn_3.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );

    UpdateGraphviz(
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
      'AFDDA', true)
  });

  btn_4.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );

    UpdateGraphviz(
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
      'abc', false);
  });

  btn_5.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );

    UpdateGraphviz(
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
      'bbaabc', false);
  });

});