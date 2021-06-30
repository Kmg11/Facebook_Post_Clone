import styled from "styled-components";

import {
	textColor,
	elementsBG,
	mainColor,
} from "../../Styles/Variables/Variables.style";

export const CreatePostContainer = styled.div``;

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
