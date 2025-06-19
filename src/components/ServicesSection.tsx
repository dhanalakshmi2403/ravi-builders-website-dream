
import React from 'react';
import { Building, Home, Image } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, villas, and apartments built with precision and care. From foundation to finishing touches, we create homes that reflect your vision.",
      features: ["Custom Home Design", "Villa Construction", "Apartment Complex", "Home Renovation"]
    },
    {
      icon: Building,
      title: "Commercial Projects",
      description: "Office buildings, retail spaces, and commercial complexes designed for functionality and aesthetic appeal. Built to enhance your business presence.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Shopping Complex"]
    },
    {
      icon: Image,
      title: "Interior Work",
      description: "Complete interior solutions including design, renovation, and finishing work. Transform your space with our expert interior services.",
      features: ["Interior Design", "False Ceiling", "Flooring Solutions", "Kitchen & Bath"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              We offer comprehensive construction services to meet all your building needs, from concept to completion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-stone-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-terracotta-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-terracotta-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-stone-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-stone-700">
                      <div className="w-2 h-2 bg-terracotta-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
