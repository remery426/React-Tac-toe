import React from 'react'
import d3 from 'd3';
import Slice from './Slice';
class Pie extends React.Component {
  constructor(props) {
    super(props);
    // https://github.com/d3/d3/wiki/Ordinal-Scales#category10
    this.colorScale = d3.scale.category10();
    this.renderSlice = this.renderSlice.bind(this);
  }

  render() {
    let {x, y, data} = this.props;
    // https://github.com/d3/d3/wiki/Pie-Layout
    let pie = d3.layout.pie();
    return (
      <g transform={`translate(${x}, ${y})`}>
        {/* Render a slice for each data point */}
        {pie(data).map(this.renderSlice)}
      </g>
    );
  }

  renderSlice(value, i) {
    // We'll create this component in a minute
    let labels = ["Easy", "Normal", "Hard"]
    return (
      <Slice key={i}
             outerRadius={this.props.radius}
             label={labels[i]}
             value={value}
             fill={this.colorScale(i)} />
    );
  }
}
export default Pie;
