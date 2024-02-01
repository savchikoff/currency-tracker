import { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '@components/Modal';
import Button from '../../Button';

import {
	ModalContainer,
	InputContainer,
	InputLabel,
	TextInput,
	SelectInput,
	Option,
	ModalWrapper,
	ErrorLabel,
} from './styled';

export default class ChartChangeModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDate: '',
			open: '',
			high: '',
			low: '',
			close: '',
			error: '',
		};
	}

	componentDidUpdate(prevProps) {
		if (prevProps.isOpen !== this.props.isOpen) {
			this.setState({ error: '' });
		}
	}

	handleOpenChange = (e) => {
		this.setState({
			open: e.target.value,
		});
	};
	handleHighChange = (e) => {
		this.setState({
			high: e.target.value,
		});
	};
	handleLowChange = (e) => {
		this.setState({
			low: e.target.value,
		});
	};
	handleCloseChange = (e) => {
		this.setState({
			close: e.target.value,
		});
	};

	handleSelectChange = (e) => {
		this.setState({ selectedDate: Number(e.target.value) });
	};

	handleDataChange = () => {
		const { close, high, low, open, selectedDate } = this.state;
		const isEnteredDataCorrect =
			Number(high) > Number(low) &&
			Number(close) >= Number(low) &&
			Number(close) <= Number(high) &&
			Number(open) >= Number(low) &&
			Number(open) <= Number(high);
		if (selectedDate && close && high && low && open) {
			if (isEnteredDataCorrect) {
				this.props.handleDataChange(selectedDate, [open, high, low, close]);
				this.props.close();
				this.setState({
					selectedDate: '',
					open: '',
					high: '',
					low: '',
					close: '',
				});
			} else {
				this.setState({
					error:
						'High must be higher than low, close and open must be between high and low',
				});
			}
		} else {
			this.setState({
				error: 'Not all values were entered',
			});
		}
	};

	render() {
		return (
			<Modal isOpen={this.props.isOpen} close={this.props.close}>
				<ModalContainer>
					<ModalWrapper>
						<InputContainer>
							<InputLabel>Date for change</InputLabel>
							<SelectInput
								onChange={this.handleSelectChange}
								value={this.state.selectedDate}
							>
								{this.props.data.map(({ x }) => {
									const stringDate = x.toDateString();
									return (
										<Option key={stringDate} value={+x}>
											{stringDate}
										</Option>
									);
								})}
							</SelectInput>
						</InputContainer>
						<InputContainer>
							<InputLabel>High</InputLabel>
							<TextInput
								value={this.state.high}
								onChange={this.handleHighChange}
							/>
						</InputContainer>
						<InputContainer>
							<InputLabel>Close</InputLabel>
							<TextInput
								value={this.state.close}
								onChange={this.handleCloseChange}
							/>
						</InputContainer>
						<InputContainer>
							<InputLabel>Open</InputLabel>
							<TextInput
								value={this.state.open}
								onChange={this.handleOpenChange}
							/>
						</InputContainer>
						<InputContainer>
							<InputLabel>Low</InputLabel>
							<TextInput
								value={this.state.low}
								onChange={this.handleLowChange}
							/>
						</InputContainer>
						<ErrorLabel>{this.state.error}</ErrorLabel>
						<Button onClick={this.handleDataChange}>Change chart</Button>
					</ModalWrapper>
				</ModalContainer>
			</Modal>
		);
	}
}

ChartChangeModal.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	close: PropTypes.func.isRequired,
	data: PropTypes.array.isRequired,
	handleDataChange: PropTypes.func.isRequired,
};
