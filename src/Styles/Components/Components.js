import styled, { css } from "styled-components";

const Message = styled.p`
	background-color: #222;
	padding: 15px;
	margin-bottom: 20px;
	color: #fff;
	font-size: 1.5rem;
	line-height: 1.5;
	border-radius: 10px;
	transition: all 0.3s linear;
	${(props) => (props.show ? css`opacity: 1;` : css`opacity: 0;`)}
`;

export const LoadingMessage = styled(Message)``;

export const ErrorMessage = styled(Message)`
	color: #f00;
`;

export const EmptyMessage = styled(Message)``;
