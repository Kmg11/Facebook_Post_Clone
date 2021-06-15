import { Link } from "react-router-dom";
import styled from "styled-components";

import {
	textColor,
	elementsBG,
	mainColor,
} from "./../../Styles/Variables/Variables";

export const PostStyle = styled.article`
	background-color: ${elementsBG};
	padding: 15px;
	margin-bottom: 20px;
`;

const TitleDesc = styled.p`
	padding-bottom: 15px;
	border-bottom: 1px solid #555;
	word-wrap: break-word;
	line-height: 1.5;
`;

export const Title = styled(TitleDesc)`
	color: ${textColor};
`;

export const Description = styled(TitleDesc)`
	padding-top: 15px;
	color: #ddd;
`;

export const LikeWrapper = styled.div`
	padding-top: 15px;
	margin-bottom: 15px;
`;

export const LikeButton = styled.button`
	background: none;
	border: none;
	display: inline-block;
	color: ${(props) => (props.liked ? mainColor : textColor)};
	cursor: pointer;
	margin-right: 10px;
`;

export const LikeCounter = styled.span`
	display: inline-block;
	color: ${textColor};
`;

export const GoToPost = styled(Link)`
	color: ${textColor};
`;

export const DeleteBtn = styled.button`
	color: ${textColor};
	background: none;
	border: none;
	text-decoration: underline;
	margin-left: 10px;
	font-size: 1rem;
	cursor: pointer;
`;
