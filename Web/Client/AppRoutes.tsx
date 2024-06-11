import TestButton from './TestButton';
import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import { type ReactElement } from 'react';
import AppLayout from './AppLayout';
import Page from "./Page";
import DemoPage from "./DemoPage";
import LexicalDemo from "./LexicalDemo";
import Home from "./Home";
import MainLayout from "./MainLayout";
import DndDemoPage from "../DndDemoPage";
import ResizableDemo from "./ResizableDemo";
import ReactRndDemo from "./ReactRndDemo";
const AppRoutes = (): ReactElement => {
	return (
		<>
			<Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/app" element={<AppLayout />} >
					<Route path="demo" element={<DemoPage/>} />
					<Route path="button" element={<TestButton />} />
					<Route path="lexicaldemo" element={<LexicalDemo />} />
                    <Route path="lexicaldnddemo" element={<DndDemoPage/>}/>
                    <Route path="resizabledemo" element={<ResizableDemo/>}/>
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
