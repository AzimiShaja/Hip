import Footer from "@/components/Footer";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";
const CustomPriceCard = ({
    type,
    price,
    bg,
    feature1,
    feature2,
    feature3,
    feature4,
    btnColor,
}: {
    type: string;
    price: string;
    bg: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    btnColor: string;
}) => {
    return (
        <div className={`${bg} rounded-3xl p-10 flex flex-col items-start gap-10 pricing`}>
            <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold">{type}</h3>
                <div className="flex items-center gap-1">
                    <h1 className="text-7xl font-extrabold">{price}</h1>
                    {type !== "Starter" && <p className="text-gray-500 text-xl">/month</p>}
                </div>
            </div>
            <div className="flex flex-col items-start gap-3">
                <h1 className="flex items-center gap-1 text-xl">
                    <Check size={20} />
                    {feature1}
                </h1>
                <h1 className="flex items-center gap-1 text-xl">
                    <Check size={20} />
                    {feature2}
                </h1>
                <h1 className="flex items-center gap-1 text-xl">
                    <Check size={20} />
                    {feature3}
                </h1>
                <h1 className="flex items-center gap-1 text-xl">
                    <Check size={20} />
                    {feature4}
                </h1>
            </div>
            <p className="font-bold text-lg">Go Live: Instant</p>
            <Link href={"/login"}
                className={`w-full ${btnColor} text-black rounded-xl p-5 px-10 text-md hover:opacity-90 transition-all font-semibold text-center`}
            >
                {type === "Pro" ? "Book a demo" : "Start for Free"}
            </Link>
        </div>
    );
};

const Pricing = () => {
    return (
        <div className="page-style">
            <div className="xl:w-[1400px] w-full grid xl:grid-cols-3 gap-5">
                <CustomPriceCard
                    bg="bg-white"
                    btnColor="hover:text-white hover:bg-black border border-black"
                    feature1="Limited to 3 collections"
                    feature2="Visual Merchandising"
                    feature3="Strategic Merchandising"
                    feature4="Analytics"
                    price="Free"
                    type="Starter"
                />
                <CustomPriceCard
                    bg="bg-gray-grid-1 text-white"
                    type="Essentials"
                    price="$199"
                    btnColor="bg-orange-button"
                    feature1="Unlimited Collections"
                    feature2="Visual Merchandising"
                    feature3="Strategic Merchandising"
                    feature4="Analytics"
                />
                <CustomPriceCard
                    bg="bg-white"
                    btnColor="hover:text-white hover:bg-black border border-black"
                    feature1="Unlimited Collections"
                    feature2="Visual Merchandising"
                    feature3="Strategic Merchandising"
                    feature4="Analytics"
                    price="$499"
                    type="Pro"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Pricing;
