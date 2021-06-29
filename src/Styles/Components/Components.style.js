import styled, { keyframes } from "styled-components";
import { mainColor, elementsBG } from "./../Variables/Variables.style";

const MessageAnimation = keyframes`
	from {opacity: 0;}
	to {opacity: 1;}
`;

const Message = styled.p`
	background-color: #222;
	padding: 15px;
	margin-bottom: 20px;
	color: #fff;
	font-size: 1.5rem;
	line-height: 1.5;
	border-radius: 10px;
	transition: all 0.3s linear;
	animation: ${MessageAnimation} 0.3s linear;

	@media (max-width: 650px) {
		font-size: 1.2rem;
	}
`;

export const ErrorMessage = styled(Message)`
	color: #f00;
`;

export const EmptyMessage = styled(Message)``;

export const LoadingWrapper = styled.div`
	position: relative;
	height: 70px;
	background-color: ${elementsBG};
	border-radius: 10px;
	margin-bottom: 20px;
	padding-top: 10px;
	padding-bottom: 10px;
	transition: all 0.3s linear;
	animation: ${MessageAnimation} 0.3s linear;
`;

const LoadingAniamtion = keyframes`
	0% {transform: rotate(0deg);}
	100% {transform: rotate(360deg);}
`;

export const Loading = styled.div`
	display: inline-block;
	margin: auto;
	width: 50px;
	height: 50px;
	background-color: transparent;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	:after {
		content: " ";
		display: block;
		width: 34px;
		height: 34px;
		margin: 2px;
		border-radius: 50%;
		border-width: 6px;
		border-style: solid;
		border-color: ${mainColor} transparent ${mainColor} transparent;
		animation: ${LoadingAniamtion} 1.2s linear infinite;
	}
`;

export const SmallLoading = styled(Loading)`
	width: 45px;
	height: 45px;

	:after {
		width: 25px;
		height: 25px;
		margin: 5px;
		border-width: 5px;
	}
`;
