import { montserrat, roboto } from "./../fonts";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css


// fonts
import "../../public/css/fontawesome.css";
import "../../public/css/icomoon.css";

//  Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import ImportBsJS from "@/components/BootstrapClient";
import Footer from "@/components/home-one/footer";
import Header from "@/components/home-one/header";

// main css
import "../../public/css/app.css";
import "../../public/css/main.css";
import "../../public/css/mobile-nav.css";

export const metadata = {
	title: "Liwa Industries || Oilfield Equipment & Industrial Solutions",
	description:
		"Liwa Industries is a premier supplier of high-quality oilfield equipment, valves, flanges, fittings, pipes, and custom alloys. Delivering excellence, on time, every time across global energy operations.",
};


export default function HomeOneLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} ${roboto.variable}`}>
				<ImportBsJS />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
