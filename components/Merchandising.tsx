import React from "react";

const Merchandising = () => {
    return (
        <div className="xl:w-[1400px] w-full px-8 flex items-center flex-col bg-orange-button mt-20 p-20 rounded-3xl gap-20">
            <h1 className="xl:text-[120px] text-3xl md:text-6xl lg:text-7xl xl:max-w-[900px] font-extrabold text-center xl:leading-[120px]">
                Merchandising made simple.
            </h1>
            <div className="flex items-center gap-5 max-xl:flex-col max-xl:w-full">
                <button className="bg-gray-grid-1 text-white rounded-xl p-5 px-10 text-md hover:opacity-90 transition-all max-lg:w-full">
                    Try for Free
                </button>
                <button className="border border-black rounded-xl p-5 px-8 text-md hover:opacity-90 transition-all max-lg:w-full hover:bg-gray-grid-1 hover:text-white">
                    Book a demo
                </button>
            </div>
        </div>
    );
};

export default Merchandising;
