import { Roboto } from "next/font/google";
import "./globals.scss";
import Provider from "./utils/Providers";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
	title: "GreenSight Test",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<Provider>
					{children}
				</Provider>
			</body>
		</html>
	);
}
