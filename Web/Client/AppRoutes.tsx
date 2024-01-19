import TestButton from './TestButton';
import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { type ReactElement } from 'react';

const AppRoutes = (): ReactElement => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />} />
				<Route index element={<Home />} />
				<Route path="button" element={<TestButton />} />
				<Route path="test" element={<TestRoute />} />
				<Route path="*" element={<NoMatch />} />
			</Routes>
		</>
	);
};

function Layout(): ReactElement {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/test">test</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
}

function TestRoute(): ReactElement {
	return <div>Test Route!</div>;
}

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
