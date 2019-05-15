var description;
var description2;
var number;
var numbers;
var categoryID = 'ExpressionBelongs';


$(document).ready(function () {

  var regex = $('#regex');
  var statement = $('#statement');
  var n = parseInt($('#nnn').text(), 10);

  var btn_yes = $('#btn_yes');
  var btn_no = $('#btn_no');


  function Update(regex_arg, statement_input, numberID) {
    $('#answer_request').show();
    $('#display_result').hide();
    $('#result').text('');
    number = numberID;

    regex.text(regex_arg);
    statement.text(statement_input);
  }

  jQuery(function () {
    getData();

    for (let i = 1; i <= n; i++) {
      $('#btn_task_' + i).click(function () {
        $(".page-item").removeClass("active");
        $(this).addClass("active");
        current = i;
        Update(description[i - 1], description2[i - 1], numbers[i - 1]);
      });
    }

    $('#btn_task_1').click();
  });

  $('#btn_repeat').click(function () {
    $('.page-item.active').click();
  });

  btn_yes.click(function () {
    $('#answer_request').hide();
    $('#display_result').show();
    displayResult(true);
  });

  btn_no.click(function () {
    $('#answer_request').hide();
    $('#display_result').show();
    displayResult(false);
  });

  function displayResult(answer) {
    $.ajax({
      async: false,
      url: '',
      type: 'post',
      data: ({
        taskType: categoryID,
        answer: answer,
        number: number
      }),
      success: function (data) {
        if (data.correct) {
          send_result(current - 1, n, categoryID);
          $('#result').text('Верно!');
          $('#result').css("color", "green");
        } else {
          $('#result').text('Не верно!');
          $('#result').css("color", "red");
        }
      },
      error: function (jqXhr, textStatus, errorThrown) {
        console.log(errorThrown);
      }
    });
  }
});