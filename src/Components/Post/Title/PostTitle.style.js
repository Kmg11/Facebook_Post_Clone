import styled from "styled-components";
import { textColor } from "../../../Styles/Variables/Variables.style";
import { PostText } from "./../Post.style";

export const Title = styled(PostText)`
	color: ${textColor};
	border-bottom: 1px solid #555;
	padding-bottom: 15px;

	@media (max-width: 650px) {
		font-size: 1.2rem;
	}
`;
