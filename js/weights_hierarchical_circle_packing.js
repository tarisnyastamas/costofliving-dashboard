let circlePackingContainer = document.getElementById("circle-packing");
let modalBody = document.querySelector("#circle-packing-body");

let saveWeightsButton = document.querySelector("#save-weights-btn");

saveWeightsButton.addEventListener("click", () => {
    console.log("save weight button clicked");
    updateIOWeights();
    profileManualInput = true;
    redrawCirclePacking(weightsOutput)
})

let svg = d3.select("#circle-packing")
    .append("svg")

function redrawCirclePacking(data_src) {

    // setting the size of the svg element to the size of the container that is containing the whole visualization
    width = circlePackingContainer.clientWidth;
    height = circlePackingContainer.clientHeight;

    svg
        .attr("width", circlePackingContainer.clientWidth)
        .attr("height", circlePackingContainer.clientWidth)
        .append("svg")

    let margin = 20;
    let diameter = +svg.attr("width");
    let g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    var color = d3.scaleLinear()
        .domain([-1, 5])
        .range(["hsla(191, 100%, 85%, 1)", "hsla(191, 100%, 18%, 1)"])
        .interpolate(d3.interpolateHcl);

    var pack = d3.pack()
        .size([diameter - margin, diameter - margin])
        .padding(2);

    d3.json('https://raw.githubusercontent.com/feketebence/costofliving-dashboard/main/data_munging/profile_weights/equal_weights.json', function (error, root) {
        if (error) throw error;

        // console.log(root);

        if(profileSelected || profileManualInput) {
            console.log("profile selected is " + profileSelected)
            root = data_src;
            root = weightsOutput;
        }
         

        root = d3.hierarchy(root)
            .sum(function (d) { return d.size; })
            .sort(function (a, b) { return b.value - a.value; });

        var focus = root,
            nodes = pack(root).descendants(),
            view;

        var circle = g.selectAll("circle")
            .data(nodes)
            .enter().append("circle")
            .attr("class", function (d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
            .style("fill", function (d) { return d.children ? color(d.depth) : null; })
            .on("click", function (d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

        var text = g.selectAll("text")
            .data(nodes)
            .enter().append("text")
            .attr("class", "label")
            // .style("fill", "#a84632")
            .style("fill-opacity", function (d) { return d.parent === root ? 1 : 0; })
            .style("display", function (d) { return d.parent === root ? "inline" : "none"; })
            .text(function (d) {
                if (d.data.size === undefined) {
                    if(d.data.category_size == 0) {
                        return "";
                    }
                    return d.data.name +" <"+ d.data.category_size + ">";
                } if (d.data.size == 0) {
                    return "";
                } else {
                    return d.data.name + " <" + d.data.size +">";
                }
            });

        var node = g.selectAll("circle,text");

        svg
            .style("background", color(-1))
            .on("click", function () { zoom(root); });

        zoomTo([root.x, root.y, root.r * 2 + margin]);

        function zoom(d) {
            var focus0 = focus; focus = d;

            var transition = d3.transition()
                .duration(d3.event.altKey ? 7500 : 750)
                .tween("zoom", function (d) {
                    var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
                    return function (t) { zoomTo(i(t)); };
                });

            transition.selectAll("text")
                .filter(function (d) { return d.parent === focus || this.style.display === "inline"; })
                .style("fill-opacity", function (d) { return d.parent === focus ? 1 : 0; })
                .on("start", function (d) { if (d.parent === focus) this.style.display = "inline"; })
                .on("end", function (d) { if (d.parent !== focus) this.style.display = "none"; });
        }

        function zoomTo(v) {
            var k = diameter / v[2]; view = v;
            node.attr("transform", function (d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
            circle.attr("r", function (d) { return d.r * k; });
        }
    });

}

redrawCirclePacking(weightsOutput);

window.addEventListener("resize", () => {
    redrawCirclePacking(weightsOutput)
});

$('#losModal').on('show.bs.modal', function(e) {
    setTimeout(() => { redrawCirclePacking(weightsOutput)}, 500);
});






