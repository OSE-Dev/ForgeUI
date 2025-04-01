import * as React from "react";
import {Outlet} from "react-router-dom";
import { useEffect } from "react";
import { Menubar } from 'primereact/menubar';
import Footer from "./Footer";
import MenubarEnd from "./MenubarEnd";
import useSwitchTheme from "./useSwitchTheme";


const AppLayout = (): React.ReactElement => {
    const { loadSavedTheme } = useSwitchTheme();
    useEffect(()=>{
        loadSavedTheme();
    },[])
    
    const modelItems = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/'
        },
    ];

    return (
        <>
            <Menubar model={modelItems} end={<MenubarEnd/>}/>
            <Outlet />
            <Footer />
        </>
    );
};

export default AppLayout;
