import { useEffect } from "react";
import { SubmitButtonStyle, SubmitButtonText } from "./FormSubmitButton.style";

export function SubmitButton({ response, buttonState, buttonConstants, time }) {
	useEffect(() => {
		const { isPending, error, success } = response;
		const { BTNPUBLISH, BTNPUBLISHED, BTNLOADING, BTNERROR, BTNTYPESOMETHING } =
			buttonConstants;
		const { buttonValue, setButtonValue } = buttonState;
		const addTime = setTimeout(() => setButtonValue(BTNPUBLISH), 3000);

		if (buttonValue !== BTNTYPESOMETHING) {
			if (isPending) setButtonValue(BTNLOADING);
			else if (success) setButtonValue(BTNPUBLISHED);
			else if (error !== null) setButtonValue(BTNERROR);
			else setButtonValue(BTNPUBLISH);

			if (success || error !== null) time.current = addTime;
		}

		return () => {
			setButtonValue("");
			clearTimeout(time.current);
		};
	}, [time, response, buttonState, buttonConstants]);

	return (
		<SubmitButtonStyle
			as="button"
			type="submit"
			clickable={buttonState.buttonValue !== buttonConstants.BTNPUBLISH && true}
		>
			<SubmitButtonText>{buttonState.buttonValue}</SubmitButtonText>
		</SubmitButtonStyle>
	);
}
