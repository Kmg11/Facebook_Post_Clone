import styled from "styled-components";
import { mainColor, textColor } from "../../../../Styles/Variables/Variables.style";

export const Form = styled.form`
	position: relative;
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 10px;
	align-items: center;
`;

export const Input = styled.input`
	outline: none;
	border: none;
	border-radius: 15px;
	padding: 15px 45px 15px 15px;
	background-color: #121212;
	color: ${textColor};
`;

export const Button = styled.button`
	background: none;
	border: none;
	position: absolute;
	top: 55%;
	right: 15px;
	transform: translateY(-50%);
	color: ${mainColor};
	font-size: 1rem;
	cursor: pointer;
	display: block;
`;
