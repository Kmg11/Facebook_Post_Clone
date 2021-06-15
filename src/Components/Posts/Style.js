import styled from "styled-components";

export const PostsList = styled.div``;

const Message = styled.p`
	background-color: #222;
	padding: 15px;
	margin-bottom: 20px;
	color: ${(props) => (props.error ? "#f00" : "#fff")};
	font-size: 1.5rem;
	line-height: 1.5;
`;

export const Loading = styled(Message)``;
export const Error = styled(Message)``;
export const Empty = styled(Message)``;
