"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../animation/FadeInStaggerTwo";

function ContactInfo() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Contact Information
          </h2>
        </div>

        {/* Info Grid */}
        <FadeInStaggerTwo className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Phone */}
          <FadeInStaggerTwoChildren>
            <div className="relative cursor-pointer h-full">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg dark:bg-gray-200"></span>
              <div className="relative h-full flex flex-col justify-between p-6 bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg transition duration-500 hover:scale-105">
                <div className="flex items-start gap-4">
                  <Phone size={32} strokeWidth={1.8} className="text-blue-600 dark:text-indigo-400" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">Call us</h3>
                    <p className="text-gray-600 dark:text-gray-300">+971 54 393 1009</p>
                    <p className="text-gray-600 dark:text-gray-300">+971 50 168 1993</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInStaggerTwoChildren>

          {/* Email */}
          <FadeInStaggerTwoChildren>
            <div className="relative cursor-pointer h-full">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-red-500 rounded-lg dark:bg-gray-200"></span>
              <div className="relative h-full flex flex-col justify-between p-6 bg-white dark:bg-gray-800 border-2 border-red-500 dark:border-gray-300 rounded-lg transition duration-500 hover:scale-105">
                <div className="flex items-start gap-4">
                  <Mail size={32} strokeWidth={1.8} className="text-red-600 dark:text-red-400" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">Email us</h3>
                    <p className="text-gray-600 dark:text-gray-300">sales@liwaindustries.com</p>
                    <p className="text-gray-600 dark:text-gray-300">admin@liwaindustries.com</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInStaggerTwoChildren>

          {/* Address */}
          <FadeInStaggerTwoChildren>
            <div className="relative cursor-pointer h-full">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg dark:bg-gray-200"></span>
              <div className="relative h-full flex flex-col justify-between p-6 bg-white dark:bg-gray-800 border-2 border-green-500 dark:border-gray-300 rounded-lg transition duration-500 hover:scale-105">
                <div className="flex items-start gap-4">
                  <MapPin size={32} strokeWidth={1.8} className="text-green-600 dark:text-green-400" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">Office address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      FOAM0781, Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInStaggerTwoChildren>
        </FadeInStaggerTwo>
      </div>
    </section>
  );
}

export default ContactInfo;
