import { Component } from 'react';

import { ButtonGroup, Tab, TabContent, CurrencyName, CurrencyImg } from './styled'

export default class CurrenciesTabs extends Component {
    constructor(props) {
        super(props);
    }

    handleSetTabActive = (id, img) => {
        this.props.setSelectedCurrency({
            selectedCurrency: { id, img }
        });
    }

    render() {
        return (
            <ButtonGroup>
                {this.props.currencies.map(currency => {
                    const { id, img } = currency;
                    return (
                        <Tab key={id} active={this.props.selectedCurrency.id === id} onClick={() => this.handleSetTabActive(id, img)}>
                            <TabContent>
                                <CurrencyImg src={img} />
                                <CurrencyName>{id}</CurrencyName>
                            </TabContent>
                        </Tab>
                    )
                })}
            </ButtonGroup>
        )
    }
}
