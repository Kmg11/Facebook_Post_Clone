import styled, { css } from "styled-components";
import { elementsBG } from "./../../Styles/Variables/Variables";

export const LoadingWrapper = styled.div`
	position: relative;
	height: 70px;
	background-color: ${elementsBG};
	border-radius: 10px;
	margin-bottom: 20px;
	padding-top: 10px;
	padding-bottom: 10px;
	transition: all 0.3s linear;

	${(props) =>
		props.show
			? css`
					opacity: 1;
			  `
			: css`
					opacity: 0;
			  `}
`;
