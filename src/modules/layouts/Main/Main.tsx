import React from 'react';



interface MainLayoutProps {
    children: React.ReactNode;

}

// style = {{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" }}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div>
        
            {children}
        </div>
    )
}

export default MainLayout;