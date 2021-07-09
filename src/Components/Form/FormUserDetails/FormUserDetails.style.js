import styled from "styled-components";
import { Input } from "../Form.style";

import {
	textColor,
	elementsBG,
} from "../../../Styles/Variables/Variables.style";

export const UserDetails = styled.section`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 15px;
	align-items: center;
	margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
	position: relative;
	width: 55px;
	height: 55px;
	border-radius: 50%;
	text-align: center;
	overflow: hidden;
	background-color: ${elementsBG};

	&::before {
		content: "Upload";
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 2;
		width: 100%;
		height: 100%;
		transform: translate(-50%, -50%);
		background-color: rgba(0, 0, 0, ${(props) => (props.haveImage ? 0 : 0.5)});
		color: ${(props) => (props.haveImage ? "#999" : textColor)};
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		opacity: ${(props) => (props.haveImage ? 1 : 0)};
		font-size: 12px;
		transition: opacity 0.2s linear;
	}

	:hover {
		&::before {
			opacity: 1;
		}
	}
`;

const ImageUpload_Image = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	height: 100%;
	border-radius: 50%;
	user-select: none;
`;

export const ImageUpload = styled(ImageUpload_Image)`
	z-index: 2;
	opacity: 0;
	cursor: pointer;
`;

export const Image = styled(ImageUpload_Image)`
	display: block;
	object-fit: cover;
	z-index: 1;
`;

export const NameInput = styled(Input)`
	margin-bottom: 0;
`;
