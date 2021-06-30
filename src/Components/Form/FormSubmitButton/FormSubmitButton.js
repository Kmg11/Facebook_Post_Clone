import { useEffect } from "react";
import { SubmitButtonStyle, SubmitButtonText } from "./FormSubmitButton.style";

export function SubmitButton({
	response,
	time,
	buttonValue,
	setButtonValue,
	buttonConstants,
}) {
	const { isPending, success, error } = response;

	// Handle Submit Button Value
	useEffect(() => {
		if (isPending) {
			setButtonValue(buttonConstants.BTNLOADING);
		} else if (success === true) {
			setButtonValue(buttonConstants.BTNPUBLISHED);
			time.current = setTimeout(
				() => setButtonValue(buttonConstants.BTNPUBLISH),
				3000
			);
		} else if (error !== null) {
			setButtonValue(buttonConstants.BTNERROR);
			time.current = setTimeout(
				() => setButtonValue(buttonConstants.BTNPUBLISH),
				3000
			);
		} else {
			setButtonValue(buttonConstants.BTNPUBLISH);
		}

		return () => {
			clearTimeout(time.current);
		};
	}, [isPending, success, error, setButtonValue, time, buttonConstants]);

	return (
		<SubmitButtonStyle
			as="button"
			type="submit"
			clickable={buttonValue !== buttonConstants.BTNPUBLISH && true}
		>
			<SubmitButtonText>{buttonValue}</SubmitButtonText>
		</SubmitButtonStyle>
	);
}
