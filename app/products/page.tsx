import fleecce2 from "../../assets/fleecce2.png";
import { FaShopify } from "react-icons/fa";
import Merchandising from "@/components/Merchandising";
import Footer from "@/components/Footer";
import { StaticImageData } from "next/image";
import collection from "../../assets/collection.jpeg";
import { BiGridHorizontal } from "react-icons/bi";
import editorial from "../../assets/editorial.jpeg";
import boost from "../../assets/boost.jpg";
import international from "../../assets/international.jpg";
import { GiClick } from "react-icons/gi";
import { FaArrowsTurnRight } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

const Perk = () => {
    return (
        <div className="xl:w-[1400px] w-full grid xl:grid-cols-custom-2 gap-10 products">
            <div className="bg-gray-grid-1 text-white rounded-3xl xl:p-10 p-5 py-10 flex flex-col h-full justify-center gap-10">
                <div className="flex flex-col gap-20 justify-center">
                    <div className="flex items-center gap-2 bg-gray-grid-3 w-fit p-3 rounded-xl">
                        <FaShopify size={20} />
                        Made for shopify
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="xl:text-6xl text-3xl font-extrabold max-xl:text-center">
                            Where Brand meets Performance.
                        </h1>
                        <p className="text-gray-400 max-xl:text-[14px] max-xl:text-center xl:max-w-[300px] font-extrabold">
                            Manage Shopify collections like it's your digital flagship store.
                        </p>
                    </div>
                    <button className="bg-orange-button w-fit text-black rounded-xl p-5 px-10 text-md hover:opacity-90 transition-all max-lg:w-full">
                        Try for Free
                    </button>
                </div>
            </div>
            <div className="xl:p-14 bg-white rounded-3xl min-w-full">
                <img src={fleecce2.src} className="shadow-2xl rounded-3xl min-w-full" />
            </div>
        </div>
    );
};

const CustomPerk = ({
    icon,
    title,
    description,
    id,
    img,
}: {
    icon: any;
    title: string;
    description: string;
    id: number;
    img: StaticImageData;
}) => {
    return id % 2 === 0 ? (
        <div className="xl:w-[1400px] grid xl:grid-cols-custom-2 gap-10 products">
            <div
                className={`bg-gray-grid-1 text-white rounded-3xl xl:p-10 p-5 py-10 flex flex-col h-full justify-center gap-10`}
            >
                <div className="flex flex-col gap-5 justify-center">
                    {icon}
                    <div className="flex flex-col gap-5">
                        <h1 className="xl:text-6xl text-3xl font-extrabold max-xl:text-center">{title}</h1>
                        <p className="text-gray-400 max-xl:text-[14px] max-xl:text-center xl:max-w-[400px] font-extrabold">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
            <div className={`xl:p-14 bg-white rounded-3xl min-w-full`}>
                <img src={img.src} className="shadow-2xl rounded-3xl min-w-full" />
            </div>
        </div>
    ) : (
        <div className="xl:w-[1400px] grid xl:grid-cols-custom-3 gap-10 products">
            <div className={`xl:p-14 bg-white rounded-3xl min-w-full`}>
                <img src={img.src} className="shadow-2xl rounded-3xl min-w-full" />
            </div>
            <div
                className={`bg-gray-grid-1 text-white rounded-3xl xl:p-10 p-5 py-10 flex flex-col h-full justify-center gap-10`}
            >
                <div className="flex flex-col gap-5 justify-center">
                    {icon}
                    <div className="flex flex-col gap-5">
                        <h1 className="xl:text-6xl text-3xl font-extrabold max-xl:text-center">{title}</h1>
                        <p className="text-gray-400 max-xl:text-[14px] max-xl:text-center xl:max-w-[400px] font-extrabold">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Products = () => {
    return (
        <div className="page-style">
            <Perk />
            <CustomPerk
                id={1}
                icon={<BiGridHorizontal className="text-orange-button" size={100} />}
                title="Content Merchandising"
                description="Add stunning content blocks to collections to reflect your brand identity. Decide default and hover product images per page."
                img={collection}
            />
            <CustomPerk
                id={2}
                icon={<GiClick className="text-orange-button" size={100} />}
                title="Editorial Merchandising"
                description="Preview pages on mobile and desktop before publishing. Visually curate as many products as you want. Get product sales and stock data at your fingertips."
                img={editorial}
            />
            <CustomPerk
                id={3}
                icon={<FaArrowsTurnRight className="text-orange-button" size={100} />}
                title="Strategic Merchandising"
                description="Set sorting rules for all your collection pages at once. Boost products up, or bury them at the bottom.  Rules can be set based on collections, tags, and data.

                "
                img={boost}
            />
            <CustomPerk
                id={4}
                icon={<TbWorld className="text-orange-button" size={100} />}
                title="International Merchandising"
                description="Sell internationally from one view. Set Strategic Merchandising rules per country you sell to."
                img={international}
            />
            <Merchandising />
            <Footer />
        </div>
    );
};

export default Products;
