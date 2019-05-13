var regex_args;
var statements;
var numbers;
var answers;
var categoryID = 'SimplifyRegex';

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

  var statement = $('#regex_assignment');
  var n = parseInt($('#nnn').text(), 10);

  var btn_accept = $('#btn_accept');

  var number;

  function Update(options, regex_assignment, numberID) {
    $('#answer_request').show();
    $('#display_result').hide();
    $('#result').text('');

    statement.text(regex_assignment);
    number = numberID;

    options = options.split('$');

    for (var i = 1; i <= 4; i++) {
      let toFind = '#label_radio' + i.toString();
      $(toFind).html('<p>' + options[i - 1] + '</p>');
    }
  }

  // Startup function
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

  btn_accept.click(function () {
    $('#answer_request').hide();
    $('#display_result').show();

    $.ajax({
      async: false,
      url: '',
      type: 'post',
      data: ({
        taskType: categoryID,
        answer: $('input[name=radio]:checked', '#answer_request').val(),
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

  });

  $("#btn_repeat").click(function () {
    $('.page-item.active').click();
  });

});