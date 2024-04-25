import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className="m-auto md:w-7/12">{children}</div>;
};

export default Container;
