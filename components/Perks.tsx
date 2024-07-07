import React from "react";
import { FaSitemap } from "react-icons/fa6";
import fleecce2 from "../assets/fleecce2.png";
import { PiStrategy } from "react-icons/pi";
import { SiGoogleanalytics } from "react-icons/si";
const Label = ({ text, icon }: { text: string; icon: any }) => {
    return (
        <div className="flex bg-gray-grid-3 p-3 hover:scale-110 transition-all items-center gap-3 w-full rounded-xl cursor-default">
            {icon}
            <h1 className="font-extrabold text-lg">{text}</h1>
        </div>
    );
};
const Perks = () => {
    return (
        <div className="xl:w-[1400px] w-full grid xl:grid-cols-custom-1 perks gap-5 py-10">
            <div className="bg-gray-grid-1 text-white rounded-3xl xl:p-10 p-5 py-10 flex flex-col h-full justify-between gap-10">
                <div className="flex flex-col gap-3">
                    <h1 className="xl:text-5xl text-3xl font-extrabold max-xl:text-center">
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
                    />
                    <Label
                        text="Strategic Boosting"
                        icon={<PiStrategy className="text-orange-button" size={30} />}
                    />
                    <Label
                        text="Merchandising Analytics"
                        icon={<SiGoogleanalytics className="text-orange-button" size={30} />}
                    />
                </div>
            </div>
            <div className="xl:p-10 bg-white rounded-3xl min-w-full">
                <img
                    src={fleecce2.src}
                    className="shadow-2xl rounded-3xl min-w-full xl:hover:scale-110 duration-1000"
                />
            </div>
        </div>
    );
};
export default Perks;
