import * as React from "react";
import {Link, Outlet} from "react-router-dom";

const MainLayout = (): React.ReactElement => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default MainLayout;
