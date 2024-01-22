import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import SignInPage from "./routes/auth/SignInPage";
import SignUpPage from "./routes/auth/SignUpPage";
import { UserProvider } from "./providers/UserProvider";
import { MessagesProvider } from "./providers/MessagesProvider";
import { TasksProvider } from "./providers/TasksProvider";
import Messages from "./routes/Messages/Messages";

function App() {
	return (
		<UserProvider>
			<MessagesProvider>
				<TasksProvider>
					<BrowserRouter>
						<Routes>
							<Route path="/auth/login" element={ <SignInPage /> } />
							<Route path="/auth/register" element={ <SignUpPage /> } />
							<Route path="/messages" element={ <Messages /> } />
							<Route path="/" element={ <Home /> } />
						</Routes>
					</BrowserRouter>
				</TasksProvider>
			</MessagesProvider>
		</UserProvider>
	);
}

export default App;
