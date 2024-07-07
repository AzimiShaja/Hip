import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Merchandising from "@/components/Merchandising";
import Perks from "@/components/Perks";
import Testimonials from "@/components/Testimonials";

const Home = () => {
	return (
		<div className="page-style">
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
