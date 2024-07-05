import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import React from "react";
import { HiOutlineFolderOpen } from "react-icons/hi";
import { LuArrowDownUp } from "react-icons/lu";
import { TbHandClick } from "react-icons/tb";

const Home = () => {
	return (
		<div className="w-full py-5 flex items-center justify-center flex-col gap-5">
			<Hero />
			<Cards />
		</div>
	);
};

export default Home;
