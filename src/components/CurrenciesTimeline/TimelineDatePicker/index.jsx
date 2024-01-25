import { Component } from 'react';

import DatePicker from './styled';

export default class TimelineDatePicker extends Component {

    constructor(props) {
        super(props);
    }

    handleChangeDate = (e) => {
        this.props.handleStartDateChange(e.target.valueAsNumber);
    }

    render() {
        return (
            <DatePicker type="date" onChange={this.handleChangeDate} />
        )
    }
}
