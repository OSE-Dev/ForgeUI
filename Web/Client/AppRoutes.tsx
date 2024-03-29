import TestButton from './TestButton';
import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { type ReactElement } from 'react';
import Layout from './Layout';
import Page from "./Page";
import DemoPage from "./DemoPage";
import LexicalDemo from "./LexicalDemo";
const AppRoutes = (): ReactElement => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />} >
					<Route index element={<Home />} />
					<Route path="demo" element={<DemoPage/>} />
					<Route path="button" element={<TestButton />} />
					<Route path="lexicaldemo" element={<LexicalDemo />} />
					<Route path="*" element={<NoMatch />} />
				</Route>
			</Routes>
		</>
	);
};

function Home(): ReactElement {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}

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
