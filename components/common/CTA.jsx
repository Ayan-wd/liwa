"use client";

export default function CallToActionSection() {
  return (
    <section className="relative z-10 overflow-hidden bg-blue-700 py-16 px-8 mt-20 mb-20">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Left Column */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl md:text-[40px] text-white text-left">
                Powering Global Energy Operations
              </h1>
              <p className="w-full text-base font-medium leading-relaxed sm:text-lg text-white text-justify">
                Liwa Industrial Equipment FZ LLC delivers reliable oilfield
                equipment and industrial solutions to support the energy sector
                worldwide — ensuring quality, performance, and trust in every
                connection.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full px-2 lg:w-1/2">
            <div className="text-center lg:text-right">
              <a
                href="/contact-us"
                className="font-semibold rounded-full mx-auto inline-flex items-center justify-center bg-white text-blue-700 py-4 px-9 hover:bg-opacity-90 transition-all duration-200 shadow-md"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background SVGs */}
      <span className="absolute top-0 right-0 -z-10">
        <svg
          width="388"
          height="250"
          viewBox="0 0 388 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M203 -28.5L0 250.5H881.5V-28.5H203Z"
            fill="url(#paint0_linear_971_6910)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_971_6910"
              x1="60.5"
              y1="111"
              x2="287"
              y2="111"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.52" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="absolute top-0 right-0 -z-10">
        <svg
          width="324"
          height="250"
          viewBox="0 0 324 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.05"
            d="M203 -28.5L0 250.5H881.5V-28.5H203Z"
            fill="url(#paint0_linear_971_6911)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_971_6911"
              x1="60.5"
              y1="111"
              x2="287"
              y2="111"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.52" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="absolute top-4 left-4 -z-10">
        <svg
          width="43"
          height="56"
          viewBox="0 0 43 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" fill="white">
            {[...Array(5)].map((_, row) =>
              [...Array(4)].map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={41 - col * 13.17}
                  cy={1.5 + row * 13.17}
                  r="1.5"
                />
              ))
            )}
          </g>
        </svg>
      </span>
    </section>
  );
}
