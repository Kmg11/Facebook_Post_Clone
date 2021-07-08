import styled from "styled-components";

export const ImageContainer = styled.div`
	position: relative;
	width: ${(props) => props.wh};
	height: ${(props) => props.wh};
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
	font-size: ${(props) => props.font};
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
