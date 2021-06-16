import { NavbarStyle, Row, Logo, List, Item, ItemLink as Link } from "./Style";

export function Navbar() {
	return (
		<NavbarStyle>
			<div className="container">
				<Row>
					<Logo to="/">Facebook Post</Logo>

					<List>
						<Item>
							<Link exact to="/">Home</Link>
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
