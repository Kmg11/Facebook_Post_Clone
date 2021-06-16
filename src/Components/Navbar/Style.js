import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import {
	textColor,
	elementsBG,
	mainColor,
} from "./../../Styles/Variables/Variables";

export const NavbarStyle = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	background-color: ${elementsBG};
	padding: 25px;
	z-index: 1000;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled(Link)`
	color: ${textColor};
	font-size: 1.7rem;
	text-decoration: none;
`;

export const List = styled.ul`
	list-style: none;
`;

export const Item = styled.li`
	display: inline-block;
`;

export const ItemLink = styled(NavLink)`
	text-decoration: none;
	color: ${textColor};
	margin: 10px 20px;
	transition: all 0.2s linear;

	:hover,
	&.active {
		color: ${mainColor};
		text-shadow: 0 0 0px ${textColor};
	}
`;
