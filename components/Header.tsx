"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoLogoXing } from "react-icons/io";
import MobileNav from "./MobileNav";
import { ToggleNavStatus } from "./context/ToggleNavContext";
export const CustomLink = ({ href, placeholder }: { href: string; placeholder: string }) => {
    return (
        <Link href={href} className="font-bold hover:bg-gray-100 rounded-xl p-2 px-4 transition-all">
            {placeholder}
        </Link>
    );
};
const Header = () => {
    const { setOpenNav, openNav } = useContext(ToggleNavStatus);
    return (
        <div className="flex flex-col w-full gap-3 items-center">
            <header className="w-[1400px] flex items-center justify-between bg-white rounded-3xl max-xl:w-full max-md:px-4 max-md:py-4">
                <Link
                    href="/"
                    className="flex md:px-5 items-center cursor-pointer hover:text-orange-button transition-all"
                >
                    <IoLogoXing size={50} />
                    <h1 className="text-xl font-extrabold">HIP</h1>
                </Link>
                <nav className="flex items-center gap-5 font-bold max-md:hidden">
                    <CustomLink href="/products" placeholder="Products" />
                    <CustomLink href="/pricing" placeholder="Pricing" />
                    <CustomLink href="/signin" placeholder="Sign In" />
                    <button className="bg-orange-button rounded-3xl py-8 px-5 font-bold text-md text-white hover:opacity-90 transition-all">
                        Start for Free
                    </button>
                </nav>
                <FaBars
                    onClick={() => setOpenNav(!openNav)}
                    className={`md:hidden active:scale-75 transition-all`}
                    size={30}
                />
            </header>
            <MobileNav />
        </div>
    );
};

export default Header;
