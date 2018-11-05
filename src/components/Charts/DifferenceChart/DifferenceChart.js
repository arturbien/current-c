import React, { Component } from 'react';
	import './DifferenceChart.css';

export default class DifferenceChart extends Component {
	getChartDefinition = () => {
		let arrLow = this.props.dataLow ? this.props.dataLow : [0,0];
		let arrHigh = this.props.dataHigh ? this.props.dataHigh : [0,0];
		let min = this.props.minmax ? this.props.minmax.min : Math.min(...arrLow);
		let max = this.props.minmax ? this.props.minmax.max :Math.max(...arrHigh);
		let scale = 100/(max-min)
		let days = arrLow.length-1;
		let offset = 100/days;
		let maxDifference = 0;
		arrLow.forEach((val, i) => {
			let difference = arrHigh[i]-val;
			maxDifference = difference > maxDifference ? difference : maxDifference;
		});
		let paths = [];
		const pathStyles = {
			strokeWidth: '8px',
			stroke: '#00f',
			preserveAspectRatio: "none",
		  vectorEffect: "non-scaling-stroke"
		}
		arrLow.forEach((val, i) => {
			let d = `M${(offset*i).toFixed(2)},${((val-min)*scale).toFixed(2)}L${(offset*i).toFixed(2)},${((arrHigh[i]-min)*scale).toFixed(2)}`;
			pathStyles.d = d;
			pathStyles.stroke = `rgba(0,0,255,${(arrHigh[i]-val)/maxDifference})`;
			let path = <path key={i} {...pathStyles} className="difference-chart-svg__path" />;
			paths.push(path);
		});
		return paths;
	}
	render() {
		return (
			<figure className="difference-chart">
				{this.props.dataLow && this.props.dataHigh &&
					<svg 
					className="difference-chart-svg"
					width="100%" 
					height="100%"  
					viewBox="0 0 100 100"  
					preserveAspectRatio="none">
					  {this.getChartDefinition()}
					</svg>
				}
			</figure>
		);
	}
}
