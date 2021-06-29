import styled, { css } from "styled-components";
import { mainColor } from "../../../Styles/Variables/Variables.style";

export const Buttons = styled.div`
	display: grid;
	grid-template-columns: ${(props) =>
		props.single ? "repeat(4, 1fr)" : "repeat(3, 1fr)"};
	justify-content: center;
	align-items: center;
	gap: 10px;
	padding-top: 20px;

	@media (max-width: 650px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}
`;

export const ButtonWrapper = styled.div``;

export const ButtonIcon = styled.span`
	color: #999;
	font-size: 1.5rem;
	display: block;
	transition: color 0.2s linear;

	svg {
		display: block;
	}
`;

export const ButtonText = styled.span`
	font-size: 1rem;
	color: #999;
	font-weight: 600;
	transition: color 0.2s linear;
`;

export const ButtonCounter = styled.span`
	color: #999;
	font-size: 1.1rem;
	font-weight: 600;
	transition: color 0.2s linear;
`;

export const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	text-decoration: none;
	display: block;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, auto);
	gap: 10px;
	justify-content: center;
	align-items: center;

	@media (max-width: 650px) {
		width: auto;
		justify-content: start;
	}

	${(props) =>
		props.counter &&
		css`
			grid-template-columns: repeat(3, auto);
		`}

	${(props) =>
		props.liked &&
		css`
			${ButtonIcon},
			${ButtonText},
			${ButtonCounter} {
				color: ${mainColor};
			}
		`}
`;
