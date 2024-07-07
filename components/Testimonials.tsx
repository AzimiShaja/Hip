"use client";
import { QuoteIcon } from "lucide-react";
import React from "react";
import testimonial1 from "../assets/testimonail1.jpeg";
import testimonial2 from "../assets/testimonial2.jpeg";
import testimonial3 from "../assets/testimonial3.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImageData } from "next/image";

const Testimonial = ({
    testimonial,
    bg,
    title,
    name,
    position,
}: {
    testimonial: string;
    bg: StaticImageData;
    title: string;
    name: string;
    position: string;
}) => {
    return (
        <div className="gap-4 items-center grid grid-cols-1 xl:grid-cols-custom xl:grid-rows-custom justify-center py-20">
            <div className="bg-gray-grid-1 xl:row-span-2 h-full text-white rounded-3xl xl:p-10 p-5 py-10 flex flex-col items-center gap-10 justify-center">
                <QuoteIcon className="text-gray-grid-3" size={90} />
                <h1 className="xl:text-4xl text-xl font-bold text-center">{testimonial}</h1>
            </div>
            <img src={bg.src} alt={bg.src} className="rounded-3xl xl:max-w-[300px]" />
            <div className="bg-white rounded-3xl xl:p-10 p-5 py-10 xl:max-w-[300px] h-[300px] flex items-center justify-center">
                <h1 className="xl:text-3xl font-bold">{title}</h1>
            </div>
            <div className="bg-gray-grid-1 xl:col-span-2 rounded-3xl xl:p-10 p-5 py-10 flex flex-col items-center justify-center gap-3">
                <h1 className="xl:text-5xl text-2xl font-bold text-white">{name}</h1>
                <p className="text-gray-300 text-sm xl:text-xl">{position}</p>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: true,
    };
    return (
        <div className="slider-container xl:w-[1400px] w-full px-8 my-20">
            <Slider {...settings}>
                <Testimonial
                    name="Hanny Eldbolm"
                    bg={testimonial1}
                    title="STRONGER"
                    position="Head of Ecommerce"
                    testimonial="A work(life)saving app. We saved 40% of our time merchandising every month."
                />
                <Testimonial
                    name="Karin Liljenfeldt"
                    bg={testimonial2}
                    title="EYTYS"
                    position="Eccomerce Manager"
                    testimonial="Time-effective visual merchandising, HIP is super user-friendly and smart."
                />
                <Testimonial
                    name="Cassandra Bäckman"
                    bg={testimonial3}
                    title="UNDERSTATMENT"
                    position="Ecommerce Manager"
                    testimonial="HIP has revolutionized our workflow with AI capabilities to enhance our operations."
                />
            </Slider>
        </div>
    );
};

export default Testimonials;
