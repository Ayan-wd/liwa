import { getAllServices } from "@/lib/services";

export const menuItemsData = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "About Us",
		url: "about-us",
	},
	// Products (shows services as submenu on mobile)
		{
			title: "Products",
			url: "services",
			submenu: getAllServices().map((s) => ({ title: s.title, url: `/services/${s.slug}` })),
		},
	{
		title: "Our Projects",
		url: "our-projects",
	},
	{
		title: "Contact Us",
		url: "contact-us",
	},
];
