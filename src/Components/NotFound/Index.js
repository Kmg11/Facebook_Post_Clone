import { Link } from "react-router-dom";
import styled from "styled-components";

// Not Found Style
const NotFoundStyle = styled.div`
	line-height: 2;
	text-align: center;
`;

const Error = styled.p`
	color: #fff;
	font-size: 1.5rem;
`;

const BackToHomePage = styled(Link)`
	text-decoration: none;
	color: #1976d2;
`;

export function NotFound() {
	return (
		<NotFoundStyle>
			<div className="container">
				<Error>404 Page Not Found</Error>
				<BackToHomePage to="/">Back To Main Page</BackToHomePage>
			</div>
		</NotFoundStyle>
	);
}
