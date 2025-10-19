"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  service: { title, description, icon, slug, heroImage },
}) {
  const href = slug ? `/services/${slug}` : `/single-service`;

  return (
    <Link
      href={href}
      className="group relative block overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        {heroImage ? (
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center h-full">
            <h5 className="text-gray-700 text-xl font-semibold">{title}</h5>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

        {/* Floating Icon (icon is a CSS class string like 'icon-valve') */}
        {icon && (
          <div className="absolute top-5 left-5 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-500">
            <i className={`${icon} w-6 h-6 text-black`} aria-hidden="true" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 bg-white relative z-10 flex flex-col justify-between h-56">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3">
            {description}
          </p>
        </div>

        {/* Arrow Button */}
        <div className="mt-5 flex items-center justify-end">
          <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all duration-300">
            <span className="font-medium text-sm">Learn More</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}
