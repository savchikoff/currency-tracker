import { Component } from 'react';
import PropTypes from 'prop-types';

import DatePicker from './styled';

export default class TimelineDatePicker extends Component {
	constructor(props) {
		super(props);
	}

	handleChangeDate = (e) => {
		this.props.handleStartDateChange(e.target.valueAsNumber);
	};

	render() {
		return <DatePicker data-cy="date-picker" type="date" onChange={this.handleChangeDate} />;
	}
}

TimelineDatePicker.propTypes = {
	handleStartDateChange: PropTypes.func.isRequired,
};
