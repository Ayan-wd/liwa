import { HelpCircle } from "lucide-react";

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

function TwoColumnFaq() {
  return (
    <div className="section aximo-section-padding bg-gray-50">
      <div className="container">
        {/* Section Title */}
        <div className="aximo-section-title text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Find answers to common questions about Liwa Industries, our
            products, and services.
          </p>
        </div>

        {/* FAQ Rows */}
        <div className="row g-4">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              {faqData.faq1.map((faq) => (
                <div
                  key={faq.id}
                  className="aximo-accordion-card d-flex align-items-start p-4 rounded-lg shadow-sm bg-white"
                >
                  <div className="me-3 flex-shrink-0">
                    <HelpCircle className="text-blue-500 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">
                      {faq.title}
                    </h3>
                    <p className="text-gray-600">{faq.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              {faqData.faq2.map((faq) => (
                <div
                  key={faq.id}
                  className="aximo-accordion-card d-flex align-items-start p-4 rounded-lg shadow-sm bg-white"
                >
                  <div className="me-3 flex-shrink-0">
                    <HelpCircle className="text-blue-500 w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-1">
                      {faq.title}
                    </h3>
                    <p className="text-gray-600">{faq.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoColumnFaq;
