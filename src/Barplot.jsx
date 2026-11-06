import * as d3 from "d3";

const data = [
  { country: "United States", students: 68 },
  { country: "France", students: 21 },
  { country: "United Kingdom", students: 21 },
  { country: "Germany", students: 20 },
  { country: "Switzerland", students: 13 },
  { country: "Spain", students: 10 },
  { country: "Netherlands", students: 9 },
  { country: "India", students: 9 },
  { country: "Singapore", students: 8 },
  { country: "Ireland", students: 8 },
  { country: "Sweden", students: 7 },
  { country: "Australia", students: 7 },
  { country: "Canada", students: 6 },
  { country: "Finland", students: 5 },
  { country: "Mexico", students: 4 },
  { country: "Brazil", students: 4 },
  { country: "Saudi Arabia", students: 3 },
  { country: "Romania", students: 3 },
  { country: "Philippines", students: 3 },
  { country: "New Zealand", students: 3 },
];

const width = 800;
const height = 500;
const marginLeft = 160;
const marginRight = 40;
const chartWidth = width - marginLeft - marginRight;

export const Barplot = ({ data }) => {
  const yScale = d3
    .scaleBand()
    .domain(data.map((d) => d.country))
    .range([0, height])
    .padding(0.35);

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.students)])
    .range([0, chartWidth]);

  const colorScale = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .range(["#8E7CC3", "#DCCEF5"]);

  return (
    <svg width={width} height={height}>
      {data.map((d) => (
        <g key={d.country}>
          <text
            x={marginLeft - 10}
            y={yScale(d.country) + yScale.bandwidth() / 2}
            dy="0.35em"
            textAnchor="end"
            fill="#625878"
          >
            {d.country}
          </text>

          <rect
            x={marginLeft}
            y={yScale(d.country)}
            width={xScale(d.students)}
            height={yScale.bandwidth()}
            fill={colorScale(data.indexOf(d))}
            rx={6}
          />
          <text
            x={marginLeft + xScale(d.students) + 10}
            y={yScale(d.country) + yScale.bandwidth() / 2}
            dy="0.35em"
            fill="#625878"
            fontSize="13"
            fontWeight="600"
          >
            {d.students}
          </text>
        </g>
      ))}
    </svg>
  );
};
