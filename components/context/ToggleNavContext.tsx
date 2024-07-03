"use client";
import React, { ReactNode } from "react";

type ToggleNavContextProps = {
    openNav: boolean;
    setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ToggleNavStatus = React.createContext<ToggleNavContextProps>({} as ToggleNavContextProps);

const ToggleNavContext = ({ children }: { children: ReactNode }) => {
    const [openNav, setOpenNav] = React.useState(false);
    return <ToggleNavStatus.Provider value={{ openNav, setOpenNav }}>{children}</ToggleNavStatus.Provider>;
};

export default ToggleNavContext;
