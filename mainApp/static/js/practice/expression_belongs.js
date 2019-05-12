var regex_args;
var statements;
var numbers;
var answers;
var categoryID = 'ExpressionBelongs';

function getData() {
  $.ajax({
    async: false,
    url: '../gettask/',
    type: 'post',
    data: ({
      taskType: categoryID
    }),
    success: function (data) {
      regex_args = data.description;
      statements = data.description2;
      numbers = data.numbers;
    },
    error: function (jqXhr, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
}

$(document).ready(function () {

  var regex = $('#regex');
  var statement = $('#statement');
  var n = parseInt($('#nnn').text(), 10);

  var btn_yes = $('#btn_yes');
  var btn_no = $('#btn_no');
  var number;


  function Update(regex_arg, statement_input, numberID) {
    $('#answer_request').show();
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
        Update(regex_args[i - 1], statements[i - 1], numbers[i - 1]);
      });
    }

    $('#btn_task_1').click();
  });

  btn_yes.click(function () {
    $('#answer_request').hide();
    displayResult(true);
  });

  btn_no.click(function () {
    $('#answer_request').hide();
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