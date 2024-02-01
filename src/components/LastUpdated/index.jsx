import { LastUpdatedContainer, LastUpdatedInfo, BlinkingDot } from './styled';
import { getCachedData } from '@utils/request';
import { formatDate } from '@utils/formatting';

const LastUpdated = () => {
	const cachedData = getCachedData();
	const lastUpdate = cachedData
		? formatDate(cachedData.meta['last_updated_at'])
		: 'no information';

	return (
		<LastUpdatedContainer>
			<BlinkingDot />
			<LastUpdatedInfo>Last updated {lastUpdate}</LastUpdatedInfo>
		</LastUpdatedContainer>
	);
};

export default LastUpdated;
