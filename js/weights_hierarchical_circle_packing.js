let circlePackingContainer = document.getElementById("circle-packing");
let modalBody = document.querySelector("#circle-packing-body");

let svg = d3.select("#circle-packing")
    .append("svg")

function redrawCirclePacking() {

    // setting the size of the svg element to the size of the container that is containing the whole visualization
    width = circlePackingContainer.clientWidth;
    height = circlePackingContainer.clientHeight;

    //delete the old
    // let domSvg = document.querySelector("#circle-packing");

    // while (domSvg.hasChildNodes()) {
    //     domSvg.removeChild(domSvg.firstChild);
    // }

    svg
        .attr("width", circlePackingContainer.clientWidth)
        .attr("height", circlePackingContainer.clientWidth)
        .append("svg")

    let margin = 20;
    let diameter = +svg.attr("width");
    let g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

    var color = d3.scaleLinear()
        .domain([-1, 5])
        .range(["hsl(339, 96%, 58%)", "hsl(171, 96%, 51%)"])
        .interpolate(d3.interpolateHcl);

    var pack = d3.pack()
        .size([diameter - margin, diameter - margin])
        .padding(2);

    let testFilenameOnGithub = "flare.json";
    let filenameOnGithub = "equal_weights.json";

    d3.json("https://raw.githubusercontent.com/feketebence/costofliving-dashboard/main/data_munging/profile_weights/equal_weights.json", function (error, root) {
        if (error) throw error;

        console.log(root);

        if(profileSelected) {
            console.log(profileSelected)
            // root = weight
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
            .style("fill-opacity", function (d) { return d.parent === root ? 1 : 0; })
            .style("display", function (d) { return d.parent === root ? "inline" : "none"; })
            .text(function (d) {
                if (d.data.size === undefined) {
                    return d.data.name +" "+ d.data.category_size;
                } else {
                    return d.data.name + " Weight: " + d.data.size;
                }
            });

        // var text2 = g.selectAll("text")
        //     .data(nodes)
        //     .enter().append("text")
        //     .attr("class", "label")
        //     .style("fill-opacity", function (d) { return d.parent === root ? 1 : 0; })
        //     .style("display", function (d) { return d.parent === root ? "inline" : "none"; })
        //     .text(function (d) {
        //         if (d.data.size === undefined) {
        //             return d.data.name + d.data.category_size;
        //         } else {
        //             return d.data.name + "\n Size: " + d.data.size;
        //         }
        //     });

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

redrawCirclePacking();

window.addEventListener("resize", redrawCirclePacking);

$('#losModal').on('show.bs.modal', function(e) {
    setTimeout(() => { redrawCirclePacking()}, 500);
});






