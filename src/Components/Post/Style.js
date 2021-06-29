import { Link } from "react-router-dom";
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
	padding-bottom: 15px;
	color: #ddd;
`;

export const ImagesPreview = styled.section`
	display: grid;
	place-items: center center;
	gap: 10px;

	${(props) =>
		props.imagesNumber === 1
			? css`
					grid-template-areas: "one";
			  `
			: props.imagesNumber === 2
			? css`
					grid-template-areas: "one two";
			  `
			: props.imagesNumber === 3
			? css`
					grid-template-areas: "one two" "three three";
			  `
			: props.imagesNumber === 4
			? css`
					grid-template-areas: "one two" "three four";
			  `
			: props.imagesNumber > 4
			? css`
					${!props.single &&
					css`
						max-height: 300px;
						overflow-x: hidden;
						padding-right: 10px;
					`}
					grid-template-areas: "one two" "three four";
			  `
			: null}
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
	position: relative;

	&:nth-of-type(1) {
		grid-area: one;
	}

	&:nth-of-type(2) {
		grid-area: two;
	}

	&:nth-of-type(3) {
		grid-area: three;
	}

	&:nth-of-type(4) {
		grid-area: four;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	user-select: none;
`;

export const ImageOverlay = styled(Link)`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: grid;
	place-content: center;
	color: ${textColor};
	font-size: 2rem;
	text-decoration: none;
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
