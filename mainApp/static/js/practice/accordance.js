var graphs;
var statements;
var numbers;
var answers;
var categoryID = 'Accordance';

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
  
  var img_graph = ['#graph_1', '#graph_2', '#graph_3', '#graph_4'];

  var statement = $('#regex_assignment');
  var n = parseInt($('#nnn').text(), 10);

  var btn_accept = $('#btn_accept');

  var number;

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
      
      viz.renderSVGElement(graph[i-1])
        .then(function(element) {
          $(toFind).html(element);
        })
        .catch(error => {
          viz = new Viz();
        });
    }
  }

  jQuery(function() {
    getData();

    for (let i = 1; i <= n; i++) {
      $('#btn_task_' + i).click(function () {
        $(".page-item").removeClass("active");
        $(this).addClass("active");
        current = i;
        Update(graphs[i - 1], statements[i - 1], numbers[i - 1]);
      });
    }

    $('#btn_task_1').click();
  });

  $('#btn_repeat').click(function () {
    $('.page-item.active').click();
  });


  btn_accept.click(function(){
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