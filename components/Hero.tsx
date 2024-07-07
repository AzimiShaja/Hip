import React from 'react'
import { FaShopify } from 'react-icons/fa'
import img from "../assets/jackets.png";
import img2 from "../assets/fleecce.jpg";
const Hero = () => {
    return (
        <main className="xl:w-[1400px] w-full grid max-lg:grid-cols-1 grid-cols-2 gap-10 p-10 rounded-3xl bg-white">
            <div className="flex flex-col items-start gap-14 justify-center">
                <div className="flex items-center gap-2 bg-gray-bg w-fit p-3 rounded-xl">
                    <FaShopify size={20} />
                    Made for shopify
                </div>
                <div className="flex flex-col gap-2 w-full lg:max-w-[500px]">
                    <h1 className="lg:text-7xl md:text-5xl text-4xl font-extrabold  lg:leading-[70px]">
                        Visual Merchandising for Brands.
                    </h1>
                    <p className="font-bold text-gray-500 stroke-black max-w-[300px] max-md:text-sm">
                        Curate content, Sort Products, & Track Data for Collection Pages
                    </p>
                </div>
                <div className="flex items-center gap-5 max-md:flex-col max-lg:w-full buttons">
                    <button className="bg-orange-button rounded-xl p-5 px-10 text-md hover:opacity-90 transition-all max-lg:w-full">
                        Try for Free
                    </button>
                    <button className="border border-black rounded-xl p-5 px-8 text-md hover:opacity-90 transition-all max-lg:w-full hover:bg-gray-grid-1 hover:text-white">
                        Book a demo
                    </button>
                </div>
            </div>
            <div className="relative">
                <img src={img.src} className="lg:-skew-x-6" alt="" />
                <img
                    src={img2.src}
                    className="absolute top-0 right-[143px] -skew-x-6 hover:scale-90 duration-500 shadow-2xl w-[170px] max-xl:hidden"
                />
            </div>
        </main>
    )
}

export default Hero