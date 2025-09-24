"use client";
import FadeInUp from "@/components/animation/FadeInUp";
import Image from "next/image";
import { useState } from "react";

import VideoBg from "../../../public/images/v1/video-bg.jpg";

function Video() {
	const [isOpen, setOpen] = useState(false);

	return (
		<FadeInUp className="aximo-video-wrap">
			<Image src={VideoBg} alt="VideoBg" sizes="(max-width:768px) 100vw, 70vw" />
	
	
		</FadeInUp>
	);
}

export default Video;
