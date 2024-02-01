import { NotFoundContainer, NotFoundHeader, NotFoundText } from './styled';
import NOTFOUND_INFO from './config';

const { header, text } = NOTFOUND_INFO;

const NotFound = () => {
	return (
		<NotFoundContainer>
			<NotFoundHeader>{header}</NotFoundHeader>
			<NotFoundText>{text}</NotFoundText>
		</NotFoundContainer>
	);
};

export default NotFound;
