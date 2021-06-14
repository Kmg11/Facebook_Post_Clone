import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import { HomePage } from "./Pages/Home/Home";
import { CreatePostPage } from "./Pages/CreatePost/CreatePost";
import { PostPage } from "./Pages/Post/Post";
import { NotFoundPage } from "./Pages/NotFound/NotFound";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/create" component={CreatePostPage} />
					<Route path="/posts/:id/:title" component={PostPage} />
					<Route path="*" component={NotFoundPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
