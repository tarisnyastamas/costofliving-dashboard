let circlePackingContainer = document.getElementById("circle-packing");
let modalHeader = document.getElementsByClassName("modal-header")[0];
let modalBody = document.getElementsByClassName("modal-body")[0];
let modalFooter = document.getElementsByClassName("modal-footer")[0];

// Get the modal
var modal = document.getElementById("modal");
var editModal = document.getElementById("edit-modal");

// Get the button that opens the modal
var btn = document.getElementById("modal-btn");
var editModalBtn = document.getElementById("edit-modal-btn");

// Get the <span> element that closes the modal
var span = document.getElementById("modal-close");
var editSpan = document.getElementById("edit-modal-close");

var editOkBtn = document.getElementById("edit-modal-ok-btn");

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

editModalBtn.onclick = function () {
    editModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

editSpan.onclick = function () {
    editModal.style.display = "none";
}

editOkBtn.onclick = function () {
    editModal.style.display = "none";
}

if (modal.style.display = "block") {
    circlePackingContainer.style.height = modalBody.clientWidth + "px";
}

let svg = d3.select("#circle-packing")
    .append("svg");

function redraw() {
circlePackingContainer.style.height = modalBody.clientWidth + "px";

// setting the size of the svg element to the size of the container that is containing the whole visualization
width = circlePackingContainer.clientWidth;
height = circlePackingContainer.clientHeight;

svg
    .attr("width", width)
    .attr("height", width)
    
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

d3.json("https://raw.githubusercontent.com/feketebence/costofliving-dashboard/main/data_munging/profile_weights/flare.json", function (error, root) {
    if (error) throw error;

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
        .text(function (d) { return d.data.name; });

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

redraw();

window.addEventListener("resize", redraw);









