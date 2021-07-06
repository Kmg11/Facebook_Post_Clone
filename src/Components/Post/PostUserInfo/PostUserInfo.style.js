import styled from "styled-components";
import { textColor } from "../../../Styles/Variables/Variables.style";

export const UserInfo = styled.section`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 15px;
	align-items: center;
	margin-bottom: 15px;
	border-bottom: 1px solid #555;
	padding-bottom: 15px;
`;

export const NameDate = styled.div``;

export const Name = styled.h4`
	color: ${textColor};
`;

export const Date = styled.p`
	color: #999;
	font-size: 12px;
	margin-top: 6px;
`;

export const ImageContainer = styled.div`
	position: relative;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	overflow: hidden;
	background-color: ${(props) => props.backgroundColor};
`;

export const UserTextAvater = styled.span`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.1rem;
	letter-spacing: -1px;
	user-select: none;
	text-transform: uppercase;
	font-weight: 500;
	color: ${(props) => props.textColor};
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	user-select: none;
`;
