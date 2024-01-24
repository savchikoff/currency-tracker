import { Component } from "react";
import Chart from "react-apexcharts";


class CurrenciesChart extends Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: []
            }],
            options: {
                chart: {
                    type: 'candlestick',
                    height: 350
                },
                xaxis: {
                    type: 'datetime',
                    labels: {
                        format: 'dd/MM'
                    }
                },
                yaxis: {
                    tooltip: {
                        enabled: true
                    }
                }
            }
        };
    }

    componentDidMount() {
        this.setState({
            series: [{
                data: this.props.data
            }]
        })
    }

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="candlestick"
                height={350}
            />
        );
    }
}

export default CurrenciesChart;