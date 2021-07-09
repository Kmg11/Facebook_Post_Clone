import styled from "styled-components";
import { elementsBG, textColor } from "../../../Styles/Variables/Variables.style";

export const InputHolder = styled.div`
	position: relative;
	width: 100%;
	background-color: ${elementsBG};
	margin-bottom: 20px;
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	z-index: 2;
`;

export const ImageHolderText = styled.p`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 2;
	display: grid;
	place-items: center;
	color: ${textColor};
	cursor: pointer;
`;

export const ImagesPreview = styled.section`
	padding: 10px;
	border-radius: 10px;
	width: 100%;
	display: ${(props) => (props.haveImages ? "grid" : "none")};
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
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
	height: 100%;
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
	height: 100%;
	object-fit: cover;
`;
