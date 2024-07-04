import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ToggleNavContext from "@/components/context/ToggleNavContext";
import Header from "@/components/Header";

export const metadata: Metadata = {
	title: "HIP - Home",
	description: "HIP, the home of high quality products",
};

const poppins = Poppins({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<ToggleNavContext>
				<body className={poppins.className + " bg-gray-bg py-10 px-3"}>
					<Header />
					{children}
				</body>
			</ToggleNavContext>
		</html>
	);
}
