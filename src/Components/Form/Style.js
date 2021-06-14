import styled from "styled-components";

export const CreatePostStyle = styled.div``;

export const H1 = styled.h1`
	color: #fff;
	margin-bottom: 20px;
`;

export const FormStyle = styled.form``;

export const Input = styled.input`
	border: none;
	width: 100%;
	padding: 15px 20px;
	margin-bottom: 20px;
	font-size: 1.2rem;
	color: #fff;
	background-color: ${(props) => (props.submit ? "#1976D2" : "#232323")};
	cursor: ${(props) => props.submit && "pointer"};
	outline: 1px solid transparent;
	transition: all 0.3s linear;

	&::placeholder {
		color: #999;
	}

	&:focus {
		outline: 1px solid #1976d2;
	}
`;

export const Textarea = styled(Input)`
	height: 200px;
	resize: none;
`;
