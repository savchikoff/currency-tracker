import { Component } from 'react'
import Modal from "@components/Modal";

import { ModalContainer, InputContainer, InputLabel, TextInput, SelectInput, ModalWrapper } from './styled';
import Button from '../../Button';

export default class ChartChangeModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

    handleDataChange = () => {
        const { close, high, low, open } = this.state;
        if (close && high && low && open) {
            if (high > low && open > close && open >= high && low >= close) {
                alert("Все ок!");
            } else {
                alert("Значения должны быть следующими: High > Low, Open > Close, Open >= High, Low >= Close");
            }
        } else {
            alert("Введены не все значения!")
        }
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen} close={this.props.close}>
                <ModalContainer>
                    <ModalWrapper>
                        <InputContainer>
                            <InputLabel>Date for change</InputLabel>
                            <SelectInput>
                                <option>Hello</option>
                                <option>Heyyy</option>
                                <option>Hey</option>
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
