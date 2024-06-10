import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
import getData from "./data.js";

getData().then((theData) => {
  const { data } = theData;
  const years = data.map((d) => d[0].slice(0, 4));
  const values = data.map((d) => d[1]);

  const xValues = d3.extent(years);
  const yValues = d3.extent(values);
  console.log(xValues, yValues);

  // Declare the chart dimensions and margins.
  const width = 640;
  const height = 400;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 30;
  const marginLeft = 40;

  // Declare the x (horizontal position) scale.
  const x = d3
    .scaleLinear()
    .domain(xValues)
    .range([marginLeft, width - marginRight]);

  // Declare the y (vertical position) scale.
  const y = d3
    .scaleLinear()
    .domain(yValues)
    .range([height - marginBottom, marginTop]);

  // Create the SVG container.
  const svg = d3.create("svg").attr("width", width).attr("height", height);

  // Add the x-axis.
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

  // Add the y-axis.
  svg
    .append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

  // Append the SVG element.
  container.append(svg.node());
});
