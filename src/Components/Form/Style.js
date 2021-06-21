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

export const SubmitButton = styled(Input)`
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

const LoadingKeyFrame = keyframes`
	0% {transform: rotate(0deg);}
	100% {transform: rotate(360deg);}
`;

export const Loading = styled.div`
	display: inline-block;
	margin: auto;
	width: 45px;
	height: 45px;
	background-color: transparent;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	:after {
		content: " ";
		display: block;
		width: 25px;
		height: 25px;
		margin: 5px;
		border-radius: 50%;
		border-width: 5px;
		border-style: solid;
		border-color: ${mainColor} transparent ${mainColor} transparent;
		animation: ${LoadingKeyFrame} 1.2s linear infinite;
	}
`;
