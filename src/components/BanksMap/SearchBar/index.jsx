import React, { Component } from 'react';
import { SearchContainer, SearchWrapper, SearchInput, ResultList, ResultItem, ResultListContainer } from './styled';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
    }

    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    handleCurrencySelect = (id) => {
        this.setState({ searchTerm: "" });
        this.props.changeSearchCurrency(id);
    }

    render() {
        const { data } = this.props;
        const { searchTerm, activeValue } = this.state;

        const filteredData = data.filter(({ id }) =>
            id.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
            <SearchContainer>
                <SearchWrapper>
                    <SearchInput
                        type="text"
                        placeholder="🔍 Search"
                        value={searchTerm}
                        onChange={this.handleSearchChange}
                    />
                    {searchTerm && (
                        <ResultListContainer>
                            <ResultList>
                                {filteredData.map(({ id }) => (
                                    <ResultItem key={id} onClick={() => this.handleCurrencySelect(id)}>{id}</ResultItem>
                                ))}
                            </ResultList>
                        </ResultListContainer>
                    )}
                </SearchWrapper>
            </SearchContainer>
        );
    }
}

export default SearchBar;
