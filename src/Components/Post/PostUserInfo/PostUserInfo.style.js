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

export const Name = styled.p`
	color: ${textColor};
	font-size: 1.1rem;
`;

export const Date = styled.p`
	color: #999;
	font-size: 12px;
	margin-top: 6px;
`;
