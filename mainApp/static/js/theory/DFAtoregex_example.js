$(document).ready(function () {
    var k = 1;
    $('#forward').click(function () {
        $("#forward").attr('disabled', true);
        $("#back").attr('disabled', true);

        dotIndex = 0;
        k = 1;
        render();
    });

    $('#back').click(function () {
        $("#forward").attr('disabled', true);
        $("#back").attr('disabled', true);

        dotIndex = dots.length - 1;
        k = -1;
        render();
    });

    var width = document.getElementById('graph').offsetWidth;
    var dotIndex = 0;
    var graphviz = d3.select("#graph").graphviz()
        .transition(function () {
            return d3.transition("main")
                .ease(d3.easeLinear)
                .delay(500)
                .duration(1500);
        })
        .logEvents(false)
        .on("initEnd", render);

    function attributer(datum, index, nodes) {
        var selection = d3.select(this);
        if (datum.tag == "svg") {
            var height = 400 * width / 964;
            var scale = 1.5 * width / 964;
            var viewBox = `0 0 ${width * 3 / 4 / scale} ${height * 3 / 4 / scale}`;
            selection
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", `${viewBox}`);
            datum.attributes.width = width;
            datum.attributes.height = height;
            datum.attributes.viewBox = `${viewBox}`;
        }
    }

    function render() {
        var dotLines = dots[dotIndex];
        var dot = dotLines.join('');
        graphviz
            .tweenPaths(true)
            .zoom(false)
            .tweenShapes(false)
            .attributer(attributer)
            .renderDot(dot)
            .on("end", function () {
                dotIndex += k;
                if ((dotIndex != dots.length && k == 1) || (dotIndex >= 0 && k == -1)) {
                    render();
                }
                else
                {
                    $("#forward").attr('disabled', false);
                    $("#back").attr('disabled', false);
                }
            });
    }

    var dots = [
        [
            `digraph { rankdir=LR;
            layout="dot";
            node [shape = doublecircle, color = black] q4 q3 q5;
            node [shape = circle, color = black];
            q1 -> q2 [ label = "a" ];
            q2 -> q4 [ label = "b" ];
            q2 -> q3 [ label = "c" ];
            q2 -> q5 [ label = "d" ];}`
        ],
        [
            `digraph { rankdir=LR;
            layout="dot";
            node [shape = doublecircle] qf;
            node [shape = circle];
            q1 -> q2 [ label = "a" ];
            q2 -> q4 [ label = "b" ];
            q2 -> q3 [ label = "c" ];
            q2 -> q5 [ label = "d" ];
            q4 -> qf [ label = "ε" ];
            q3 -> qf [ label = "ε" ];
            q5 -> qf [ label = "ε" ];
          }`
        ],
        [
            `digraph { rankdir=LR;
            layout="dot";
            node [shape = doublecircle] qf;
            node [shape = circle];
            q1 -> q2 [ label = "a" ];
            q2 -> qf [ label = "b" ];
            q2 -> q3 [ label = "c" ];
            q2 -> q5 [ label = "d" ];
            q3 -> qf [ label = "ε" ];
            q5 -> qf [ label = "ε" ];
          }`
        ],
        [
            `digraph { rankdir=LR;
            layout="dot";
            node [shape = doublecircle] qf;
            node [shape = circle];
            q1 -> q2 [ label = "a" ];
            q2 -> qf [ label = "b" ];
            q2 -> qf [ label = "c" ];
            q2 -> q5 [ label = "d" ];
            q5 -> qf [ label = "ε" ];
          }`
        ],
        [
            `digraph { rankdir=LR;
            layout="dot";
            node [shape = doublecircle] qf;
            node [shape = circle];
            q1 -> q2 [ label = "a" ];
            q2 -> qf [ label = "b" ];
            q2 -> qf [ label = "c" ];
            q2 -> qf [ label = "d" ];
          }`
        ],
        [
            `digraph { rankdir=LR;
            layout="dot";
            node [shape = doublecircle] qf;
            node [shape = circle];
            q1 -> q2 [ label = "a" ];
            q2 -> qf [ label = "b+c+d" ];
          }`
        ],
        [
            `digraph { rankdir=LR;
            layout="dot";
            node [shape = doublecircle] qf;
            node [shape = circle];
            q1 -> qf [ label = "a(b+c+d)" ];
          }`
        ],
    ];
});