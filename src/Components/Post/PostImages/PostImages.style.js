import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { textColor } from "../../../Styles/Variables/Variables.style";

export const ImagesPreview = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	place-items: center center;
	gap: 10px;

	${(props) =>
		props.imagesNumber === 1
			? css`
					grid-template-areas: "one one";
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

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	user-select: none;
`;
