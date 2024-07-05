import React from 'react'
import { FaSitemap } from "react-icons/fa6";
import fleecce2 from "../assets/fleecce2.png";
import { PiStrategy } from "react-icons/pi";
import { SiGoogleanalytics } from "react-icons/si";
const Label = ({
    text,
    icon,
    descTitle,
    desc,
}: {
    text: string;
    icon: any;
    descTitle: string;
    desc: string;
}) => {
    return (
        <div className="flex bg-gray-grid-3 p-3 justify-center hover:scale-110 transition-all items-center gap-3 w-full rounded-xl cursor-default">
            {icon}
            <h1 className="font-extrabold text-lg">{text}</h1>
        </div>
    );
};
const Perks = () => {
    return (
        <div className="xl:w-[1400px] w-full grid lg:grid-cols-2 gap-5 py-10">
            <div className="bg-gray-grid-1 text-white rounded-3xl xl:p-10 p-4 flex flex-col h-full justify-between gap-10">
                <div className="flex flex-col gap-3">
                    <h1 className="xl:text-5xl text-4xl font-extrabold max-xl:text-center">
                        The App for Fashion Merchandising
                    </h1>
                    <p className="text-gray-400 max-xl:text-[14px] max-xl:text-center">
                        Hip lets you manage your collection pages like the world's best ecommerce teams.
                    </p>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <Label
                        text="Visual Curation"
                        icon={<FaSitemap className="text-orange-button" size={30} />}
                        descTitle="Curate content"
                        desc="With a single click, add, rearrange, and remove products and collections."
                    />
                    <Label
                        text="Strategic Boosting"
                        icon={<PiStrategy className="text-orange-button" size={30} />}
                        descTitle="Boost sales"
                        desc="With a single click, add, rearrange, and remove products and collections."
                    />
                    <Label
                        text="Merchandising Analytics"
                        icon={<SiGoogleanalytics className="text-orange-button" size={30} />}
                        descTitle="Get insights"
                        desc="With a single click, add, rearrange, and remove products and collections."
                    />
                </div>
            </div>
            <div className="xl:p-10 bg-white rounded-3xl w-full">
                <img
                    src={fleecce2.src}
                    className="shadow-2xl rounded-3xl w-full hover:scale-110 duration-1000"
                />
            </div>
        </div>
    )
}

export default Perks