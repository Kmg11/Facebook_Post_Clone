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
	font-size: 1.2rem;
	color: ${textColor};
	border: 1px solid transparent;
	transition: all 0.3s linear;
	background-color: ${elementsBG};
	border-radius: 10px;
	margin-bottom: 20px;

	&[type="file"] {
		position: relative;
		opacity: 0;
		z-index: 0;
		cursor: pointer;
		margin-bottom: 0;
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
