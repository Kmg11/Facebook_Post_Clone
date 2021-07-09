import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./Pages/Home/Home";
import { CreatePostPage } from "./Pages/CreatePost/CreatePost";
import { PostPage } from "./Pages/Post/Post";
import { NotFoundPage } from "./Pages/NotFound/NotFound";
import "./App.css";
import { createContext } from "react";

export const APIContext = createContext();

const URL = `http://localhost:8000/posts`;

function App() {
	return (
		<APIContext.Provider value={URL}>
			<Router>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/create" component={CreatePostPage} />
					<Route path="/posts/:id" component={PostPage} />
					<Route path="/posts/:id/:title" component={PostPage} />
					<Route path="*" component={NotFoundPage} />
				</Switch>
			</Router>
		</APIContext.Provider>
	);
}

export default App;
