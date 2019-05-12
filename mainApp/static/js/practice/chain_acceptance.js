var categoryID = 1;
var n = 5;

var graphs;
var statements;
var numbers;
var answers;

function getData() {
  $.ajax({
    async: false,
    url: '../gettask/',
    type: 'post',
    data: ({ taskType : 'ChainAcceptance'}),
    success: function( data ){
      graphs = data.description;
      statements = data.description2;
      numbers = data.numbers;
    },
    error: function( jqXhr, textStatus, errorThrown ){
        console.log( errorThrown );
    }
  });
}

$(document).ready(function () {

  var svg_div = $('#graphviz_svg');
  var statement = $('#statement');
  var n = parseInt($('#nnn').text(), 10);

  var btn_yes = $('#btn_yes');
  var btn_no = $('#btn_no');
  var number;


  function UpdateGraphviz(data, statement_input, numberID) {
    $('#answer_request').show();
    $('#result').text('');

    svg_div.html("<br>loaing...<br>");
    statement.text(statement_input);
    number = numberID;
    
    // current_answer = answer;
    // Generate the Visualization of the Graph into "svg".

    var viz = new Viz();
    viz.renderSVGElement(data)
      .then(function (element) {
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
  jQuery(function () {
    // event.preventDefault();
    getData();

    for (let i = 1; i <= n; i++) {
      $('#btn_task_' + i).click(function () {
        $(".page-item").removeClass("active");
        $(this).addClass("active");
        current = i;
        UpdateGraphviz(graphs[i-1], statements[i-1], numbers[i-1]);
      });
    }

    $('#btn_task_1').click();
  });

  // Bind actions to form buttons.
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
      data: ({ taskType : 'ChainAcceptance', answer: answer, number: number}),
      success: function( data ){
        if(data.correct) {
          send_result(current - 1, n, categoryID);
          $('#result').text('Верно!');
          $('#result').css("color", "green");
        }
        else {
          $('#result').text('Не верно!');
          $('#result').css("color", "red");
        }
      },
      error: function( jqXhr, textStatus, errorThrown ){
          console.log( errorThrown );
      }
    });
  }

  

  // (a+b)*
  // btn_1.click(function () {
  //   $(".page-item").removeClass("active");
  //   $(this).addClass("active");
  //   current = 1;
  //   UpdateGraphviz(data[0], statements[0], answers[0]);
  // });

  // b*(cb+a)
  // btn_2.click(function () {
  //   $(".page-item").removeClass("active");
  //   $(this).addClass("active");
  //   current = 2;
  //   UpdateGraphviz(
  //     data[1], statements[1], answers[1]);
  // });

  // (ab|b)(a|c*)
  // btn_3.click(function () {
  //   $(".page-item").removeClass("active");
  //   $(this).addClass("active");
  //   current = 3;
  //   UpdateGraphviz(
  //     data[2], statements[2], answers[2])
  // });

  // (bb(d+a)a)*
  // btn_4.click(function () {
  //   $(".page-item").removeClass("active");
  //   $(this).addClass("active");
  //   current = 4;
  //   UpdateGraphviz(
  //     data[3], statements[3], answers[3]);
  // });

  // (d|a(b|d))*|c|a
  // btn_5.click(function () {
  //   $(".page-item").removeClass("active");
  //   $(this).addClass("active");
  //   current = 5;
  //   UpdateGraphviz(
  //     data[4], statements[4], answers[4]);
  // });

});