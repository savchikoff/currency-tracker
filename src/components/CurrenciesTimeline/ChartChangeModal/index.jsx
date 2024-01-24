import { Component } from 'react'
import Modal from "@components/Modal";

import { ModalContainer, InputContainer, InputLabel, TextInput, SelectInput, ModalWrapper } from './styled';

export default class ChartChangeModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isOpen} close={this.props.close}>
                <ModalContainer>
                    <ModalWrapper>
                        <InputContainer>
                            <InputLabel>Open</InputLabel>
                            <TextInput />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Low</InputLabel>
                            <TextInput />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Low</InputLabel>
                            <TextInput />
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Close</InputLabel>
                            <TextInput />
                        </InputContainer>
                    </ModalWrapper>
                </ModalContainer>
            </Modal>
        )
    }
}
