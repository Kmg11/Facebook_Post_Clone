import styled from "styled-components";
import { textColor } from "../../../Styles/Variables/Variables.style";
import { PostText } from "./../Post.style";

export const Title = styled(PostText)`
	color: ${textColor};
	font-weight: 400;

	@media (max-width: 650px) {
		font-size: 1.2rem;
	}
`;
