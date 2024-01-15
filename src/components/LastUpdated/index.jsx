import React from 'react';
import PropTypes from 'prop-types';

import { LastUpdatedContainer, LastUpdatedDotInner, LastUpdatedDotOuter, LastUpdatedInfo } from './styled';

const LastUpdated = ({ time = "Last updated at 11:59pm" }) => {
    return (
        <LastUpdatedContainer>
            <LastUpdatedDotOuter>
                <LastUpdatedDotInner />
            </LastUpdatedDotOuter>
            <LastUpdatedInfo>{time}</LastUpdatedInfo>
        </LastUpdatedContainer>
    )
}

LastUpdated.propTypes = {
    time: PropTypes.string.isRequired
}

export default LastUpdated;