import styled, { css } from "styled-components";

import {
	textColor,
	elementsBG,
	mainColor,
} from "./../../Styles/Variables/Variables";

export const CreatePostStyle = styled.div``;

export const H1 = styled.h1`
	color: ${textColor};
	margin-bottom: 20px;
`;

export const FormStyle = styled.form``;

export const Input = styled.input`
	border: none;
	width: 100%;
	padding: 15px 20px;
	margin-bottom: 20px;
	font-size: 1.2rem;
	color: ${textColor};
	outline: 1px solid transparent;
	transition: all 0.3s linear;
	background-color: ${elementsBG};

	${(props) =>
		props.submit &&
		css`
			background-color: ${mainColor};
			cursor: pointer;
		`}

	::placeholder {
		color: #999;
	}

	:focus {
		outline: 1px solid ${mainColor};
	}
`;

export const Textarea = styled(Input)`
	height: 200px;
	resize: none;
`;
