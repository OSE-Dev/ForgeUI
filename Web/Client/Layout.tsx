import * as React from "react";
import {Link, Outlet} from "react-router-dom";
import { Menubar } from 'primereact/menubar';

const Layout = (): React.ReactElement => {

    const items = [
        {
            label: 'File',
            icon: 'pi pi-fw pi-file '
        }];
    return (
        <>
            <Menubar model={items}/>
            <Outlet />
        </>
    );
};

export default Layout;
