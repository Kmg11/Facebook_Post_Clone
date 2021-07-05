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

export const Name = styled.h4`
	color: ${textColor};
`;

export const ImageContainer = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	overflow: hidden;
`;

export const Image = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	user-select: none;
`;
