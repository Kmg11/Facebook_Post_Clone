import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostStyle = styled.article`
	background-color: #222;
	padding: 15px;
	margin-bottom: 20px;
`;

export const Title = styled.h2`
	color: #fff;
	margin-bottom: 15px;
	padding-bottom: 10px;
	border-bottom: 1px solid #555;
	word-wrap: break-word;
	line-height: 1.5;
`;

export const Description = styled.p`
	color: #ddd;
	line-height: 1.5;
	margin-bottom: 15px;
	padding-bottom: 12px;
	border-bottom: 1px solid #555;
	word-wrap: break-word;
`;

export const LikeWrapper = styled.div`
	margin-bottom: 15px;
`;

export const LikeButton = styled.button`
	background: none;
	border: none;
	display: inline-block;
	color: ${(props) => (props.liked ? "#1976D2" : "#fff")};
	cursor: pointer;
	margin-right: 10px;
`;

export const LikeCounter = styled.span`
	display: inline-block;
	color: #fff;
`;

export const GoToPost = styled(Link)`
	color: #fff;
`;

export const DeleteBtn = styled.button`
	color: #fff;
	background: none;
	border: none;
	text-decoration: underline;
	margin-left: 10px;
	font-size: 1rem;
	cursor: pointer;
`;
