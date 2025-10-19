import { montserrat, roboto } from "./../fonts";
// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react modal video css
 import 'tailwindcss/tailwind.css'

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

import WhatsAppButton from "@/components/common/Whatsappbutton";

export const metadata = {
  metadataBase: new URL("https://liwaindustries.com"),
  title: {
    default: "Liwa Industries",
    template: "%s | Liwa Industries",
  },
  description: "Leading provider of industrial solutions and engineering services.",
};



export default function HomeOneLayout({ children }) {
	return (
		<html lang="en">
			
			<body className={`${montserrat.variable} ${roboto.variable}`}>
				<ImportBsJS />
				<Header />
				{children}
				<WhatsAppButton/>
				<Footer />
			</body>
		</html>
	);
}
