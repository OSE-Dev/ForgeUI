import * as React from "react";
import {Link, Outlet} from "react-router-dom";
import { Menubar } from 'primereact/menubar';

const AppLayout = (): React.ReactElement => {

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/'
        },];
    return (
        <>
            <Menubar model={items}/>
            <Outlet />
        </>
    );
};

export default AppLayout;
