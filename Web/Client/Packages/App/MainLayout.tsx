import * as React from "react";
import {Outlet} from "react-router-dom";

const MainLayout = (): React.ReactElement => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default MainLayout;
