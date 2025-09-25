// fonts.ts
import { Montserrat, Roboto } from "next/font/google";

export const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"], // choose weights you need
	display: "swap",
	variable: "--font-montserrat",
});

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"], // adjust as required
	display: "swap",
	variable: "--font-roboto",
});
