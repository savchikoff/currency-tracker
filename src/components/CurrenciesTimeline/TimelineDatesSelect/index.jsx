import { Component } from 'react';

import { SelectContainer, SelectWrapper, StartDateSelect, EndDateSelect, SelectLabel, Select, SelectOption } from './styled';

export default class TimelineDatesSelect extends Component {
    render() {
        return (
            <SelectContainer>
                <SelectWrapper>
                    <StartDateSelect>
                        <SelectLabel>From</SelectLabel>
                        <Select>
                            <SelectOption>Hello</SelectOption>
                            <SelectOption>Hello</SelectOption>
                            <SelectOption>Hello</SelectOption>
                            <SelectOption>Hello</SelectOption>
                            <SelectOption>Hello</SelectOption>
                        </Select>
                    </StartDateSelect>
                    <EndDateSelect>
                        <SelectLabel>To</SelectLabel>
                        <Select>
                            <SelectOption>Hello</SelectOption>
                            <SelectOption>Hello</SelectOption>
                            <SelectOption>Hello</SelectOption>
                            <SelectOption>Hello</SelectOption>
                            <SelectOption>Hello</SelectOption>
                        </Select>
                    </EndDateSelect>
                </SelectWrapper>
            </SelectContainer>
        )
    }
}
