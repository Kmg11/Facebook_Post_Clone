import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarStyle = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	background-color: #232323;
	padding: 20px;
	z-index: 1000;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled(Link)`
	color: #fff;
	font-size: 2rem;
	text-decoration: none;
`;

export const List = styled.ul`
	list-style: none;
`;

export const Item = styled.li`
	display: inline-block;
`;

export const ItemLink = styled(Link)`
	text-decoration: none;
	color: #fff;
	margin: 10px 20px;
`;
