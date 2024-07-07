import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import Perks from "@/components/Perks";
import Testimonials from "@/components/Testimonials";
import React, { useState } from "react";

const Home = () => {
	return (
		<div className="w-full py-5 flex items-center justify-center flex-col gap-5">
			<Hero />
			<Cards />
			<Perks />
			<Testimonials />
		</div>
	);
};

export default Home;
