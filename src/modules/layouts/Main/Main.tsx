import React from 'react';

// import { NavBar } from 'modules/components';

interface MainLayoutProps {
    children: React.ReactNode;

}

// style = {{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" }}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
            {/* <NavBar /> */}
            {children}
        </div>
    )
}

export default MainLayout;