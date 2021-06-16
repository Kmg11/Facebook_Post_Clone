import styled, { css } from "styled-components";

import {
	textColor,
	elementsBG,
	mainColor,
} from "./../../Styles/Variables/Variables";

export const PostStyle = styled.article`
	background-color: ${elementsBG};
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 10px;
	transition: all 0.3s linear;
	opacity: 0;
	transform: translateY(50%);

	${(props) =>
		props.show &&
		css`
			opacity: 1;
			transform: translateY(0);
		`}
`;

const TitleDesc = styled.p`
	padding-bottom: 15px;
	border-bottom: 1px solid #555;
	word-wrap: break-word;
	line-height: 1.5;
`;

export const Title = styled(TitleDesc)`
	color: ${textColor};

	@media (max-width: 650px) {
		font-size: 1.2rem;
	}
`;

export const Description = styled(TitleDesc)`
	padding-top: 15px;
	color: #ddd;
`;

export const Buttons = styled.div`
	display: grid;
	grid-template-columns: ${(props) =>
		props.single ? "repeat(4, 1fr)" : "repeat(3, 1fr)"};
	justify-content: center;
	align-items: center;
	gap: 10px;
	text-align: center;
	padding-top: 20px;

	@media (max-width: 650px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
	}
`;

export const ButtonWrapper = styled.div``;

export const ButtonIcon = styled.div`
	color: #999;
	font-size: 1.5rem;
	display: block;
	transition: color 0.2s linear;

	svg {
		display: block;
	}
`;

export const ButtonText = styled.div`
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
	text-align: center;
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

	:hover {
		${ButtonIcon},
		${ButtonText},
		${ButtonCounter} {
			color: ${mainColor};
		}
	}
`;
