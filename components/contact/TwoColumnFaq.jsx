"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqData = {
  faq1: [
    {
      id: crypto.randomUUID(),
      title: "What products does Liwa Industries supply?",
      text: "We supply a wide range of industrial equipment including valves, flanges, fittings, pipes, compression fittings, gaskets, and custom alloys.",
    },
    {
      id: crypto.randomUUID(),
      title: "Do you provide custom alloy solutions?",
      text: "Yes, we specialize in custom alloys tailored to meet specific industry standards and client requirements for oil & gas and industrial applications.",
    },
    {
      id: crypto.randomUUID(),
      title: "Do you offer international delivery?",
      text: "Absolutely. Liwa Industries delivers products globally with reliable logistics support to ensure timely supply wherever you are.",
    },
  ],
  faq2: [
    {
      id: crypto.randomUUID(),
      title: "Which industries do you serve?",
      text: "We serve oil & gas, petrochemical, power generation, marine, and other heavy industries with high-quality products and solutions.",
    },
    {
      id: crypto.randomUUID(),
      title: "Where are your offices located?",
      text: "We operate from Dubai (Mai Tower, Al Nahda) and Ras Al Khaimah (Al Hamra Industrial Zone FZE), serving clients across the UAE and worldwide.",
    },
    {
      id: crypto.randomUUID(),
      title: "How can I request a quotation?",
      text: "You can contact us via phone, email, or our website’s contact form. Our team will respond with a customized quote based on your requirements.",
    },
  ],
};

function AccordionItem({ faq, isOpen, onClick }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 transition-all duration-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-5"
      >
        <div className="flex items-start gap-3">
          <HelpCircle className="text-blue-500 w-6 h-6 mt-1" />
          <h3 className="text-lg font-semibold text-gray-900">{faq.title}</h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-blue-600" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-14 pb-5 text-gray-600 text-justify animate-fadeIn">
          {faq.text}
        </div>
      )}
    </div>
  );
}

export default function TwoColumnFaq() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-gray-50 py-20 text-justify">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Find answers to common questions about Liwa Industries, our
            products, and services.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[faqData.faq1, faqData.faq2].map((col, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {col.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onClick={() => handleToggle(faq.id)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
