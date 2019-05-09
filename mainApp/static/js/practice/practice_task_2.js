var categoryID = 4;
var n = 5;

$(document).ready(function () {

  var btn_1 = jQuery('#btn_task_1_1');
  var btn_2 = jQuery('#btn_task_1_2');
  var btn_3 = jQuery('#btn_task_1_3');
  var btn_4 = jQuery('#btn_task_1_4');
  var btn_5 = jQuery('#btn_task_1_5');

  var regex = $('#regex');
  var statement = $('#statement');

  var btn_yes = $('#btn_yes');
  var btn_no = $('#btn_no');
  var current_answer = false;


  function Update(regex_arg, statement_input, answer) {
    $('#answer_request').show();
    $('#result').text('');

    regex.text(regex_arg);
    statement.text(statement_input);
    current_answer = answer;
  }

  // Startup function: call UpdateGraphviz
  jQuery(function() {
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

  btn_1.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 1;
    Update('a+b.', 'abc', false);
  });

  btn_2.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 2;
    Update('AAA', 'abc', false);
  });

  btn_3.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 3;
    Update('AFDDA', 'aaa', true);
  });

  btn_4.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 4;
    Update('abc', 'fgfgf', false);
  });

  btn_5.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );
    current = 5;
    Update('ab+c', 'h', false);
  });

});