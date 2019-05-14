var graphs;
var statements;
var numbers;
var answers;
var categoryID = 'Accordance';

// получение данных заданий
function getData() {
  $.ajax({
    async: false,
    url: '../gettask/',
    type: 'post',
    data: ({
      taskType: categoryID
    }),
    success: function (data) {
      graphs = data.description;
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

  // хранит id текущенго задания из бд
  var number;

  // обновление содержимого страницы по ее соответствующему номеру
  // answer = {1, 2, 3, 4}, [4 indexes for data array]
  function Update(graph, regex_assignment, numberID) {
    $('#answer_request').show();
    $('#display_result').hide();
    $('#result').text('');

    graph = graph.split("$");

    statement.text(regex_assignment);
    number = numberID;

    for (let i = 1; i <= 4; i++) {
      var viz = new Viz();
      let toFind = '#graph_' + i.toString();

      viz.renderSVGElement(graph[i - 1])
        .then(function (element) {
          $(toFind).html(element);
        })
        .catch(error => {
          viz = new Viz();
        });
    }
  }

  jQuery(function () {
    getData();

    // обработчики кнопок листания заданий
    for (let i = 1; i <= n; i++) {
      $('#btn_task_' + i).click(function () {
        $(".page-item").removeClass("active");
        $(this).addClass("active");
        current = i;
        Update(graphs[i - 1], statements[i - 1], numbers[i - 1]);
      });
    }

    // при обновлении страницы выводим первое задание
    $('#btn_task_1').click();
  });

  // кнопка повтора
  $('#btn_repeat').click(function () {
    $('.page-item.active').click();
  });

  // кнопка подтверждения
  $('#btn_accept').click(function () {
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

});