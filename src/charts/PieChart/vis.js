import * as d3 from 'd3';

const draw = (props) => {
    const data = props.data;
    const country = ["China", "India", "United States of America", "Russia", "South Korea", "Brazil", "Mexico", "Australia"];
    let count = new Array(country.length).fill(0);
    data.forEach(d => {
        let countryIndex = country.indexOf(d.Country);
        if (countryIndex !== -1)
            count[countryIndex] += 1;
    });

    let countryListInfo = [] 
    for(let i = 0; i < country.length; i++){
        let countryDict = {}
        countryDict["label"] = country[i];
        countryDict["count"] = count[i];
        countryListInfo.push(countryDict);
    }
    const dataset = countryListInfo.filter(dictC => dictC.count!==0)
    
    d3.select('.vis-piechart > *').remove();
    const margin = { top: 10, right: 20, bottom: 30, left: 40 };
    const width = props.width - margin.left - margin.right;
    const height = props.height - margin.top - margin.bottom;

    let svg = d3.select('.vis-piechart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + (width / 3 + margin.left) + ',' + (height / 2 + margin.top) + ')');

    let radius = Math.min(width, height) / 2;

    let color = d3.scaleOrdinal()
        .range(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]);

    let arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    let pie = d3.pie()
        .value(function (d) { return d.count; })
        .sort(null);

    svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function (d, i) {
            return color(i);
        });
    let legendG = svg.selectAll(".legend")
        .data(pie(dataset))
        .enter().append("g")
        .attr("transform", function (d, i) {
            return "translate(" + (i * 200 - 150) + "," + 110 + ")"; 
        })
        .attr("class", "legend");

    legendG.append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill", function (d, i) {
            return color(i);
        });

    legendG.append("text") 
        .text(function (d) {
            return d.data.label;
        })
        .style("font-size", 12)
        .attr("y", 10)
        .attr("x", 11);
}

export default draw;
