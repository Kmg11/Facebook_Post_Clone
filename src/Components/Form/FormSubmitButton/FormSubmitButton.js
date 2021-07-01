import { SubmitButtonStyle, SubmitButtonText } from "./FormSubmitButton.style";

export function SubmitButton({ buttonValue, BTNPUBLISH }) {
	return (
		<SubmitButtonStyle
			as="button"
			type="submit"
			clickable={buttonValue !== BTNPUBLISH && true}
		>
			<SubmitButtonText>{buttonValue}</SubmitButtonText>
		</SubmitButtonStyle>
	);
}
