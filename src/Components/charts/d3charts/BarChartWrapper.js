import React, { Component } from 'react';
import D3Chart from './BarChart';

export default class BarChartWrapper extends Component {

    componentDidMount(){
        new D3Chart(this.refs.chart)
    }
    render() {
        return (
            <>
                <div className="mapsTitle">SVG Bar Chart</div>
                <div className="drawCharts">
                <div ref="chart" className="chartsDiv"></div>
                </div>
            </>
        )
    }
}
