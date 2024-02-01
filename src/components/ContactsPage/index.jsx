import {
	ContactsContainer,
	ContactsWrapper,
	ContactsTextWrapper,
	ContactsHeader,
	ContactsText,
	InputWrapper,
	MailInput,
} from './styled';
import Button from '@components/Button';
function ContactsPage() {
	return (
		<ContactsContainer>
			<ContactsWrapper>
				<ContactsTextWrapper>
					<ContactsHeader>Do you have any questions?</ContactsHeader>
					<ContactsText>
						Leave your mail and we will contact you 👇
					</ContactsText>
				</ContactsTextWrapper>
				<InputWrapper>
					<MailInput placeholder="Enter your email" />
					<Button>Send</Button>
				</InputWrapper>
			</ContactsWrapper>
		</ContactsContainer>
	);
}

export default ContactsPage;
