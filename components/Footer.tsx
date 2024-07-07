import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BiHeadphone } from "react-icons/bi";
import { BsGrid1X2Fill } from "react-icons/bs";
import { GiClick } from "react-icons/gi";

const CustomCard = ({ icon, title }: { icon: any; title: string }) => {
    return (
        <div className="flex items-center gap-3 bg-gray-grid-3 p-4 rounded-3xl border border-gray-500 text-white justify-center">
            {icon}
            <h1 className="text-lg font-extrabold">{title}</h1>
        </div>
    );
};

const CustomNav = ({ link1, link2, link3 }: { link1: string, link2: string, link3: string }) => {
    return (<div className="flex flex-col items-start text-white gap-5">
        <Link href={`/ ${link1.toLowerCase() === "home" ? "/" : link1.toLowerCase()}`} className="font-bold hover:text-gray-grid-3 transition-all">{link1}</Link>
        <Link href={`/${link3.toLowerCase()}`} className="font-bold hover:text-gray-grid-3 transition-all">{link3}</Link>
        <Link href={`/${link2.toLowerCase()}`} className="font-bold hover:text-gray-grid-3 transition-all">{link2}</Link>
    </div>);
}

const Footer = () => {
    return (
        <footer className="xl:w-[1400px] w-full p-10 flex flex-col gap-10 items-center justify-center bg-gray-grid-1 rounded-3xl">
            <div className="flex text-white md:px-5 items-center cursor-pointer gap-3">
                <BsGrid1X2Fill size={40} />
                <h1 className="text-xl font-extrabold">HIP</h1>
            </div>
            <div className="grid xl:grid-cols-3 w-full gap-2">
                <CustomCard icon={<GiClick size={30} />} title="1 - Click-Installation" />
                <CustomCard icon={<CheckCircle />} title="Free Available Plans" />
                <CustomCard icon={<BiHeadphone size={30} />} title="24/7 Support" />
            </div>
            <div className="grid md:grid-cols-3  sm:grid-cols-2  gap-20 py-10">
                <CustomNav link1="Home" link2="Product" link3="Pricing" />
                <CustomNav link1="Customers" link2="Contact" link3="Sign In" />
                <CustomNav link1="Our Story" link2="Career" link3="LinkedIn" />
            </div>
            <div className="flex flex-col items-center gap-2">
                <p className="text-gray-400 font-bold text-[12px]">© 2024 Hip. All rights reserved.</p>
                <button className="text-gray-400 font-bold text-[12px]">Privacy Policy</button>
            </div>
        </footer>
    );
};

export default Footer;
