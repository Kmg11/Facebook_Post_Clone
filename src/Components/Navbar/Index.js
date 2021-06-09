import { NavbarStyle, Row, Logo, List, Item, ItemLink as Link } from "./Style";

export function Navbar() {
	return (
		<NavbarStyle>
			<div className="container">
				<Row>
					<Logo to="/">Blog</Logo>

					<List>
						<Item>
							<Link to="/">Home</Link>
						</Item>
						<Item>
							<Link to="/create">Create Post</Link>
						</Item>
					</List>
				</Row>
			</div>
		</NavbarStyle>
	);
}
