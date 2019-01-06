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

  var regex = $('#regex');
  var statement = $('#statement');

  var btn_yes = $('#btn_yes');
  var btn_no = $('#btn_no');
  var current_answer = false;


  function Update(regex, statement_input, answer) {
    $('#answer_request').show();
    $('#result').text('');

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

    Update('abc', false);
  });

  btn_2.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );

    Update('abc', false);
  });

  btn_3.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );

    Update('AFDDA', true);
  });

  btn_4.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );

    Update('abc', false);
  });

  btn_5.click(function(){
    $( ".page-item" ).removeClass( "active" );
    $(this).addClass( "active" );

    Update('abc', false);
  });

});