import React from 'react';
import d3 from 'd3'
class Slice extends React.Component {
  render() {
    let {value, label, fill, innerRadius = 0, outerRadius} = this.props;
    let arc = d3.svg.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);
    return (
      <g>
        <path d={arc(value)} fill={fill} />
        {/* https://github.com/d3/d3/wiki/SVG-Shapes#arc_centroid */}
        <text transform={`translate(${arc.centroid(value)})`}
              dy=".35em"
              textAnchor="middle"
              fill="white">
          {label}
        </text>
      </g>
    );
  }
}
export default Slice
