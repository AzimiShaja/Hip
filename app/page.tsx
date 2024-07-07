import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Merchandising from "@/components/Merchandising";
import Perks from "@/components/Perks";
import Testimonials from "@/components/Testimonials";

const Home = () => {
	return (
		<div className="w-full py-5 flex items-center justify-center flex-col gap-10">
			<Hero />
			<Cards />
			<Perks />
			<Testimonials />
			<Merchandising />
			<Footer />
		</div>
	);
};

export default Home;
