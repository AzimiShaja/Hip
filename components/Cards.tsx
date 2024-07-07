import React from "react";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { LuArrowDownUp } from "react-icons/lu";
import { TbHandClick } from "react-icons/tb";

const CustomCard = ({
    icon,
    title,
    description,
    bg,
}: {
    icon: any;
    title: string;
    description: string;
    bg: string;
}) => {
    return (
        <div className={`${bg} card rounded-3xl p-10 lg:py-20 flex flex-col items-center justify-center gap-6 cursor-pointer`}>
            <div className="icon">{icon}</div>
            <h1 className="xl:text-6xl text-3xl text-center font-extrabold text-white">{title}</h1>
            <p className="text-gray-400 font-bold text-center lg:max-w-[300px] text-[14px]">{description}</p>
        </div>
    );
};
const Cards = () => {
    return (
        <div className="xl:w-[1400px] cards w-full py-10 rounded-3xl flex items-center justify-center flex-col gap-20">
            <h1 className="lg:text-4xl md:text-2xl text-xl max-w-[600px] text-center font-bold">
                Collections are your most important pages, but are frustrating to manage
            </h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 w-full gap-5">
                <CustomCard
                    icon={<TbHandClick className="text-orange-button" size={70} />}
                    title="Complex Curation"
                    description="Adding content and visualizing collections is painful to manage."
                    bg="bg-gray-grid-1"
                />
                <CustomCard
                    icon={<LuArrowDownUp className="text-orange-button" size={70} />}
                    title="Limited Boosting"
                    description="You can't combine manual and automatic sorting per page."
                    bg="bg-gray-grid-2"
                />
                <CustomCard
                    icon={<HiOutlineFolderOpen className="text-orange-button" size={70} />}
                    title="Messy Database"
                    description="You need 5 tabs open to track sales and stock data while merchandising"
                    bg="bg-gray-grid-3"
                />
            </div>
        </div>
    );
};

export default Cards;
