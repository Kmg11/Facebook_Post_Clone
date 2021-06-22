import styled, { css, keyframes } from "styled-components";
import { SmallLoading } from "./../../Styles/Components/Components";

import {
	textColor,
	elementsBG,
	mainColor,
} from "./../../Styles/Variables/Variables";

const PostKeyframe = keyframes`
	from {opacity: 0; transform: translateY(50%);}
	to {opacity: 1; transform: translateY(0);}
`;

export const PostStyle = styled.article`
	position: relative;
	background-color: ${elementsBG};
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 10px;
	transition: all 0.3s linear;
	animation: ${PostKeyframe} 0.3s linear;
`;

const TitleDesc = styled.p`
	word-wrap: break-word;
	line-height: 1.5;
`;

export const Title = styled(TitleDesc)`
	color: ${textColor};
	border-bottom: 1px solid #555;
	padding-bottom: 15px;

	@media (max-width: 650px) {
		font-size: 1.2rem;
	}
`;

export const Loading = styled(SmallLoading)`
	transform: none;
	left: auto;
	right: 0;
	top: 0;
	background-color: #232323;
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
