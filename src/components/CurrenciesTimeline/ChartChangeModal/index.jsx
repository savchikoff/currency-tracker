import { Component } from 'react'
import Modal from "@components/Modal";

import { ModalContainer, InputContainer, InputLabel, TextInput, SelectInput, ModalWrapper } from './styled';
import Button from '../../Button';

export default class ChartChangeModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDate: 0,
            open: 0,
            high: 0,
            low: 0,
            close: 0
        }
    }

    handleOpenChange = (e) => {
        this.setState({
            open: Number(e.target.value)
        })
    }
    handleHighChange = (e) => {
        this.setState({
            high: Number(e.target.value)
        })
    }
    handleLowChange = (e) => {
        this.setState({
            low: Number(e.target.value)
        })
    }
    handleCloseChange = (e) => {
        this.setState({
            close: Number(e.target.value)
        })
    }

    handleSelectChange = (e) => {
        this.setState({ selectedDate: Number(e.target.value) });
    }

    handleDataChange = () => {
        const { close, high, low, open, selectedDate } = this.state;
        if (selectedDate && close && high && low && open) {
            if (high > low && close >= low && close <= high && open >= low && open <= high) {
                this.props.handleDataChange(selectedDate, [open, high, low, close]);
                this.props.close();
            } else {
                alert("Значение high должно быть больше low, a close и open должны лежать в промежутке от high до low");
            }
        } else {
            alert("Введены не все значения!");
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} close={this.props.close}>
                <ModalContainer>
                    <ModalWrapper>
                        <InputContainer>
                            <InputLabel>Date for change</InputLabel>
                            <SelectInput onChange={this.handleSelectChange} value={this.state.selectedDate}>
                                {this.props.data.map(({ x }) => {
                                    const stringDate = x.toDateString();
                                    return <option key={stringDate} value={+x}>{stringDate}</option>
                                })}
                            </SelectInput>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Open</InputLabel>
                            <TextInput value={this.state.open} onChange={this.handleOpenChange} />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>High</InputLabel>
                            <TextInput value={this.state.high} onChange={this.handleHighChange} />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Low</InputLabel>
                            <TextInput value={this.state.low} onChange={this.handleLowChange} />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Close</InputLabel>
                            <TextInput value={this.state.close} onChange={this.handleCloseChange} />
                        </InputContainer>
                        <Button onClick={this.handleDataChange}>Change chart</Button>
                    </ModalWrapper>
                </ModalContainer>
            </Modal>
        )
    }
}
