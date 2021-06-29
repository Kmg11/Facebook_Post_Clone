import styled, { css, keyframes } from "styled-components";
import { elementsBG, mainColor } from "../../../Styles/Variables/Variables.style";
import { Input } from "../Form.style";

const animateButton = keyframes`
	from {opacity: 0;}
	to {opacity: 1;}
`;

export const SubmitButtonText = styled.span``;

export const SubmitButtonStyle = styled(Input)`
	background-color: ${mainColor};
	cursor: pointer;
	position: relative;

	${(props) =>
		props.clickable &&
		css`
			background-color: ${elementsBG};
			height: 54px;
			cursor: default;

			${SubmitButtonText} {
				animation: ${animateButton} 0.3s linear;
			}

			:focus {
				border: 1px solid transparent;
			}
		`}
`;
