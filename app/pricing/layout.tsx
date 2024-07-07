import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Hip - Pricing",
    description: "HIP, the home of high quality products",
};

const layout = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default layout;
