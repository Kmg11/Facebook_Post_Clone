import styled from "styled-components";

const Message = styled.p`
	color: ${(props) => (props.error ? "#f00" : "#fff")};
	font-size: 1.5rem;
	line-height: 1.5;
`;

export const Loading = styled(Message)``;
export const Error = styled(Message)``;
