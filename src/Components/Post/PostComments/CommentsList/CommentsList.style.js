import styled from "styled-components";
import { Link } from "react-router-dom";
import { textColor } from "../../../../Styles/Variables/Variables.style";

export const List = styled.ul``;

export const Comment = styled.li`
	position: relative;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	gap: 10px;
	margin-top: 15px;
`;

export const CommentText = styled.p`
	color: ${textColor};
	background-color: #333;
	border-radius: 15px;
	padding: 15px;
	padding-right: 50px;
	line-height: 1.5;
	word-wrap: break-word;
`;

export const DeleteCommentBtn = styled.button`
	border: 0;
	background: none;
	position: absolute;
	top: 50%;
	right: 15px;
	transform: translateY(-50%);
	color: ${textColor};
	font-size: 1.3rem;
	cursor: pointer;
`;

export const ShowMoreComments = styled(Link)`
	display: block;
	color: ${textColor};
	text-align: center;
	margin-top: 20px;
	text-decoration: none;
	font-size: 0.9rem;
`;
