var height = 200;
var width = 200;

var data = [{'2019-10': 273}, {'2019-11': 299}, {'2019-12': 244}, {'2020-01': 231}, {'2020-02': 232}];

var mapped = data.map(d => {
  return {
    date: Object.keys(d)[0],
    count: d[Object.keys(d)[0]]
  }
});

var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
var y = d3.scale.linear().range([height, 0]);

x.domain(mapped.map(d => d.date));
y.domain([0, d3.max(mapped, d => d.count)]);
  
var svg = d3.select("#simple").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.selectAll("bar")
    .data(mapped)
    .enter().append("rect")
      .style("fill", "steelblue")
      .attr("x", d => x(d.date))
      .attr("width", x.rangeBand())
      .attr("y", d => y(d.count))
      .attr("height", d => height - y(d.count));