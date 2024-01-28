import { Component } from 'react';
import PropTypes from 'prop-types';

import { ButtonGroup, Tab, TabContent, CurrencyName, CurrencyImg } from './styled'
import { QUOTES_DATA } from '@constants/currencies';


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
                {QUOTES_DATA.map(currency => {
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

CurrenciesTabs.propTypes = {
    selectedCurrency: PropTypes.object.isRequired,
    setSelectedCurrency: PropTypes.func.isRequired
}
