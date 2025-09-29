"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://api.whatsapp.com/send/?phone=923065169753&text=Hello%21+I+want+to+know+more+about+your+services&type=phone_number&app_absent=0"
        target="_blank"
        className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      >
        <FaWhatsapp size={22} />
        Chat on WhatsApp
      </Link>
    </div>
  );
}
