"use client";
import React, { useContext, useState } from "react";
import { CustomLink } from "./Header";
import { motion } from "framer-motion";
import { ToggleNavStatus } from "./context/ToggleNavContext";
const MobileNav = () => {
    const { openNav, setOpenNav } = useContext(ToggleNavStatus);
    return (
        <motion.nav
            initial={{ height: 0 }}
            onClick={() => setOpenNav(false)}
            animate={{ height: openNav ? 330 : 0 }}
            className={`overflow-hidden md:hidden shadow-2xl flex flex-col items-center gap-5 font-bold w-full bg-white h-screen rounded-3xl ${!openNav ? "p-0" : "p-4"
                } `}
        >
            <CustomLink href="/" placeholder="Home" />
            <CustomLink href="/products" placeholder="Products" />
            <CustomLink href="/pricing" placeholder="Pricing" />
            <CustomLink href="/login" placeholder="Sign In" />
            <button className="bg-orange-button rounded-3xl p-4 font-bold text-md text-white hover:opacity-90 transition-all w-full">
                Start for Free
            </button>
        </motion.nav>
    );
};

export default MobileNav;
