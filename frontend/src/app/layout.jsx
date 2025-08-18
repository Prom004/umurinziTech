export const metadata = {
	title: "UmurinziTech",
	description: "Secure your devices, empower institutions, and assist investigations.",
};

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}