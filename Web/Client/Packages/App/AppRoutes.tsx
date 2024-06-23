import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { type ReactElement } from 'react';
import AppLayout from './AppLayout';
import LexicalDemo from "../Gadgets/Lexical/LexicalDemo";
import MainLayout from "./MainLayout";
import ReactRndDemo from "../ContentEditor/ReactRndDemo";
import Home from "../HomePage/Home";
const AppRoutes = (): ReactElement => {
	return (
		<>
			<Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/app" element={<AppLayout />} >
					<Route path="lexicaldemo" element={<LexicalDemo />} />
                    <Route path="reactrnddemo" element={<ReactRndDemo/>}/>
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</>
	);
};

function NoMatch(): ReactElement {
	return (
		<div>
			<h2>Nothing to see here!</h2>
			<p>
				<Link to="/">Go to the home page</Link>
			</p>
		</div>
	);
}

export default AppRoutes;
