import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { services, features, faqs } from "../Data/serviceData";

// Key Feature *method one*
const Feature = ({ feature }) => {
  const { icon: Icon, title, description } = feature;
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex items-center space-x-4">
      <div className="bg-gray-100 text-gray-700 p-3 rounded-full">
        <Icon size={32} />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

//  Service Card *method two*
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center">
      <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-6">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      <button className="mt-6 bg-white text-blue-600 font-semibold py-2 px-5 border border-blue-200 rounded-full hover:bg-blue-50 transition-colors duration-300">
        Learn More
      </button>
    </div>
  );
};

// FAQ Item Component with Accordion functionality
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left transition-all ease-out duration-200"
      >
        <h4 className="text-lg font-semibold text-gray-800">{question}</h4>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-blue-600" />
        ) : (
          <ChevronDown className="h-6 w-6 text-gray-500" />
        )}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        } text-gray-600`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

// Main Service Page Component
const Service = () => {
  return (
    <div className="bg-gray-50 font-sans">
      {/* Main container with padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* --- Hero Section --- */}
        <section className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Your Tech, <span className="text-blue-600">Our Expertise.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
            From cracked screens to battery woes, we provide professional,
            reliable, and speedy repair services to get your devices back in
            perfect shape.
          </p>
          <button className="mt-8 bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
            Book a Repair
          </button>
        </section>

        {/* --- Key Features Section --- */}
        <section className="grid md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <Feature key={index} feature={feature} />
          ))}
        </section>

        {/* --- Services Grid Section --- */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Core Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              We handle a wide range of issues with precision and care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* --- FAQ Section --- */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Have Questions?
            </h2>
            <p className="mt-4 text-gray-600">
              Find answers to common queries about our services below.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {faqs.map((faq, index) => (
              <FaqItem key={index} {...faq} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Service;
