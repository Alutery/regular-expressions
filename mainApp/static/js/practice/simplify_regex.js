$(document).ready(function () {
  var btn_1 = jQuery('#btn_task_1');
  var btn_2 = jQuery('#btn_task_2');
  var btn_3 = jQuery('#btn_task_3');
  var btn_4 = jQuery('#btn_task_4');
  var btn_5 = jQuery('#btn_task_5');

  var statement = $('#regex_assignment');

  var btn_accept = $('#btn_accept');
  var btn_repeat = $('#btn_repeat');

  var current_answer = 0;

  // answer = {1, 2, 3, 4}, [4 indexes for data array]
  function Update(regex_assignment, answer) {
    $('#answer_request').show();
    $('#btn_repeat').hide();
    $('#result').text('');

    statement.text(regex_assignment);
    current_answer = answer;

    for (var i = 1; i <= 4; i++) {
      let toFind = '#label_radio' + i.toString();
      $(toFind).html('<p>' + arguments[i + 1] + '</p>');
    }
  }

  // Startup function
  jQuery(function () {
    btn_1.click();
  });

  btn_accept.click(function () {
    $('#answer_request').hide();
    $('#btn_repeat').show();

    if (current_answer == $('input[name=radio]:checked', '#answer_request').val()) {
      send_result(current-1);

      $('#result').text('Верно!');
      $('#result').css("color", "green");
    } else {
      $('#result').text('Не верно!');
      $('#result').css("color", "red");
    }
  });

  btn_repeat.click(function () {
    $('li.active').click();
  });


  btn_1.click(function () {
    $(".page-item").removeClass("active");
    $(this).addClass("active");
    current = 1;
    Update('(a + b)(a + b) + aa + bb', 4, '(a + b)(a + b) + bb + a', '(a + b)', 'aa + bb', '(a + b)(a + b)');
  });

  btn_2.click(function () {
    $(".page-item").removeClass("active");
    $(this).addClass("active");
    current = 2;
    Update('(a*b)* + (b*a)*', 1, '(b + a)*', '(a + b)(a + b)*', 'a*b*', 'ε + (a + b)*(b + a)');
  });

  btn_3.click(function () {
    $(".page-item").removeClass("active");
    $(this).addClass("active");
    current = 3;
    Update('(abbaab + abbaaba)*', 3, '(abbaa(b + ba))* + abbaab', '(abbaaba)*', '(abbaa(b + ba))*', '(abbaab)* + (abbaaba)*');
  });

  btn_4.click(function () {
    $(".page-item").removeClass("active");
    $(this).addClass("active");
    current = 4;
    Update('((ab + ab)*a*)*', 3, '(ab + a)', '(ab + a)a*', '(ab + a)*', '(ab)*');
  });

  btn_5.click(function () {
    $(".page-item").removeClass("active");
    $(this).addClass("active");
    current = 5;



    Update('c + (a ( ( (a + a) ) + c*)* + ( (ac + b) + c) )', 2, 'a(a + c)', 'a(a + c)* + b + c', 'c + (a( (a) + c*) + ( (ac + b) + c) )*', '(a (a + c)* + ( (ac + b) + c) )');
  });


});

var categoryID = 3;
var n = 5;

function send_result(i) {
  $.ajax({
    url: '../send_result/',
    type: 'get',
    data: ({
      category: categoryID,
      i: i,
      n: n
    }),
    error: function (xhr, errmsg, err) {
      console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
    }
  });
}