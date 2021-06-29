import { useEffect } from "react";
import { SmallLoading } from "../../../Styles/Components/Components.style";
import { SubmitButtonStyle, SubmitButtonText } from "./FormSubmitButton.style";

export function SubmitButton({ response, time, buttonValue, setButtonValue }) {
	const { isPending, success, error } = response;

	// Handle Submit Button Value
	useEffect(() => {
		if (isPending) {
			setButtonValue(<SmallLoading />);
		} else if (success === true) {
			setButtonValue("Published");
			time.current = setTimeout(() => setButtonValue("Publish"), 3000);
		} else if (error !== null) {
			setButtonValue("Error Please Try Again Later");
			time.current = setTimeout(() => setButtonValue("Publish"), 3000);
		} else {
			setButtonValue("Publish");
		}

		return () => {
			clearTimeout(time.current);
		};
	}, [isPending, success, error, setButtonValue, time]);

	return (
		<SubmitButtonStyle
			as="button"
			type="submit"
			clickable={buttonValue !== "Publish" && true}
		>
			<SubmitButtonText>{buttonValue}</SubmitButtonText>
		</SubmitButtonStyle>
	);
}
