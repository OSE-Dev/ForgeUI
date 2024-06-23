import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { type ReactElement } from 'react';
import AppLayout from './app-layout';
import LexicalDemo from "../gadgets/lexical/lexical-demo";
import MainLayout from "./main-layout";
import ReactRndDemo from "../content-editor/react-rnd-demo";
import Home from "../home-page/home";
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
