import styled from "styled-components";
import { elementsBG } from "../../../Styles/Variables/Variables.style";

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
