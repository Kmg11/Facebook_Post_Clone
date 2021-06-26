import styled, { css, keyframes } from "styled-components";

import {
	textColor,
	elementsBG,
	mainColor,
} from "./../../Styles/Variables/Variables";

export const CreatePostStyle = styled.div``;

export const H1 = styled.h1`
	color: ${textColor};
	margin-bottom: 20px;

	@media (max-width: 650px) {
		font-size: 1.5rem;
	}
`;

export const FormStyle = styled.form``;

export const Input = styled.input`
	border: none;
	width: 100%;
	padding: 15px 20px;
	margin-bottom: 20px;
	font-size: 1.2rem;
	color: ${textColor};
	border: 1px solid transparent;
	transition: all 0.3s linear;
	background-color: ${elementsBG};
	border-radius: 10px;

	&[type="file"] {
		position: relative;

		::before {
			content: "Add Image";
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 2;
			width: 100%;
			height: 100%;
			background-color: ${elementsBG};
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
		}
	}

	@media (max-width: 650px) {
		font-size: 1.1rem;
	}

	::placeholder {
		color: #999;
	}

	:focus {
		outline: none;
		border: 1px solid ${mainColor};
	}
`;

export const Textarea = styled(Input)`
	height: 200px;
	resize: none;
`;

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

export const ImagesPreview = styled.section`
	padding: 10px;
	border-radius: 10px;
	width: 100%;
	display: ${(props) => (props.haveImages ? "grid" : "none")};
	grid-template-columns: repeat(3, 1fr);
	gap: 15px;
	align-items: center;
	margin-bottom: 20px;
	max-height: 300px;
	overflow-x: hidden;
	background-color: ${elementsBG};

	@media (max-width: 650px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const ImageContainer = styled.div`
	width: 100%;
	position: relative;
`;

export const DeleteImage = styled.span`
	position: absolute;
	top: 10px;
	right: 10px;
	color: #fff;
	cursor: pointer;
	font-size: 1rem;
`;

export const Image = styled.img`
	display: block;
	width: 100%;
`;
