import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { Navbar } from "./Components/Navbar/Index";
import { Posts } from "./Components/Posts/Index";
import { CreatePost } from "./Components/CreatePost/Index";
import { NotFound } from "./Components/NotFound/Index";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />

				<Switch>
					<Route exact path="/" component={Posts} />
					<Route path="/create" component={CreatePost} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
