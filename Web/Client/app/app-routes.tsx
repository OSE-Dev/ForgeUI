import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { type ReactElement } from 'react';
import AppLayout from './app-layout';
import LexicalDemo from "@open-source-education/gadget-lexical/lexicalDemo";
import MainLayout from "./main-layout";
import About from "../pages/about";
import {ReactRndDemoWrapper} from "@open-source-education/content-editor/reactRndDemoWrapper";
const AppRoutes = (): ReactElement => {
	return (
		<>
			<Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<About />} />
                </Route>
                <Route path="/app" element={<AppLayout />} >
					<Route path="lexicaldemo" element={<LexicalDemo />} />
                    <Route path="reactrnddemo" element={<ReactRndDemoWrapper/>}/>
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
