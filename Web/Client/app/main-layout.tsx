import * as React from "react";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";
import { Menubar } from 'primereact/menubar';
import MenubarEnd from "./MenubarEnd";
import useSwitchTheme from "./useSwitchTheme";
import { useEffect } from "react";

const MainLayout = (): React.ReactElement => {
    const { loadSavedTheme } = useSwitchTheme();
    useEffect(()=>{
        loadSavedTheme();
    },[loadSavedTheme])
    return (
        <>
            <Menubar end={<MenubarEnd/>}/>
            <div className="index-content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;
