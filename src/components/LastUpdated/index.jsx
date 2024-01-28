import { LastUpdatedContainer, LastUpdatedDotInner, LastUpdatedDotOuter, LastUpdatedInfo } from './styled';
import { getCachedData } from '@utils/request';
import { formatDate } from '@utils/formatting';

const LastUpdated = () => {
    const cachedData = getCachedData();
    const lastUpdate = cachedData ? formatDate(cachedData.meta["last_updated_at"]) : "no information";

    return (
        <LastUpdatedContainer>
            <LastUpdatedDotOuter>
                <LastUpdatedDotInner />
            </LastUpdatedDotOuter>
            <LastUpdatedInfo>Last updated {lastUpdate}</LastUpdatedInfo>
        </LastUpdatedContainer>
    )
}

export default LastUpdated;