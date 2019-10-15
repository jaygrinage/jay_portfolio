import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;

}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>{children}</div>
        <div>Hello</div>
    )
}

export default MainLayout;