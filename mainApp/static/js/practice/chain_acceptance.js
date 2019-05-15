var description;
var description2;
var number;
var numbers;
var categoryID = 'ChainAcceptance';
var n;


$(document).ready(function () {

  var svg_div = $('#graphviz_svg');
  var statement = $('#statement');
  n = parseInt($('#nnn').text(), 10);

  var btn_yes = $('#btn_yes');
  var btn_no = $('#btn_no');


  function UpdateGraphviz(data, statement_input, numberID) {
    $('#answer_request').show();
    $('#result').text('');
    $('#display_result').hide();

    svg_div.html("<br>loaing...<br>");
    statement.text(statement_input);
    number = numberID;

    var viz = new Viz();
    viz.renderSVGElement(data)
      .then(function (element) {
        svg_div.html(element);
      })
      .catch(error => {
        viz = new Viz();
        console.error(error);
      });
  }

  jQuery(function () {
    getData();

    for (let i = 1; i <= n; i++) {
      $('#btn_task_' + i).click(function () {
        $(".page-item").removeClass("active");
        $(this).addClass("active");
        current = i;
        UpdateGraphviz(description[i - 1], description2[i - 1], numbers[i - 1]);
      });
    }

    $('#btn_task_1').click();
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
          send_result(number, n, categoryID);
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