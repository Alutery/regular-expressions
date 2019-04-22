$(document).ready(function () {
    var data = [
    `
        digraph G { 
        rankdir=LR;
        size="8,5"\
        node [shape = doublecircle]; f;
        node [shape = circle];
        q -> f [ label = "ε" ];}`,

    `digraph G { 
        rankdir=LR;
        size="8,5";
        node [shape = doublecircle]; f;
        node [shape = circle];
        q -> f [ label = "a" ];}`,

    `digraph G {
        rankdir="LR";
        size="8,5";
        subgraph cluster_0 {
            style = filled,rounded;
            color = lightgrey;
            node[style = filled, color = white, fontcolor = white];
            a0 -> a1;
            label = "M(s)";
        }
        subgraph cluster_1 {
            style = filled;
            color = lightgrey;
            node[style = filled, color = white, fontcolor = white];
            b0 -> b1;
            label = "M(t)";
        }
        node[shape = doublecircle]; f;
        node[shape = circle];
        i -> a0[label = "ε"];
        i -> b0[label = "ε"];
        a1 -> f[label = "ε"];
        b1 -> f[label = "ε"];
    }`,
    `digraph G {
        rankdir="LR";
        size="8,5";
        subgraph cluster_0 {
            style = filled;
            color = lightgrey;
            node[style = filled, color = white, fontcolor = white];
            a0 -> a1[dir = back, label = "ε"];
            label = "M(s)";
        }
    
        node[shape = doublecircle];
        f;
        node[shape = circle];
        i -> a0[label = "ε"];
        i -> f;
        a1 -> f[label = "ε"];
    }`
    ]

    data.forEach(function(g, arrayIndex) {
        var viz = new Viz();
        let toFind = '#graph_' + arrayIndex.toString();

        viz.renderSVGElement(data[arrayIndex])
        .then(function(element) {
            $(toFind).html(element);
        })
        .catch(error => {
            viz = new Viz();
            console.error(error);
        });
    });    
})
