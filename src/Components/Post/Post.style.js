import styled, { keyframes } from "styled-components";
import { SmallLoading } from "../../Styles/Components/Components.style";
import { elementsBG } from "../../Styles/Variables/Variables.style";

const PostKeyframe = keyframes`
	from {opacity: 0; transform: translateY(50%);}
	to {opacity: 1; transform: translateY(0);}
`;

export const PostContainer = styled.article`
	position: relative;
	background-color: ${elementsBG};
	padding: 20px;
	margin-bottom: 20px;
	border-radius: 10px;
	transition: all 0.3s linear;
	animation: ${PostKeyframe} 0.3s linear;
`;

export const PostText = styled.p`
	word-wrap: break-word;
	line-height: 1.7;
`;

export const Loading = styled(SmallLoading)`
	transform: none;
	left: auto;
	right: 0;
	top: 0;
	background-color: #232323;
`;
