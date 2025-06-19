
import React from 'react';
import { Building, Home } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              About Ravi Builders
            </h2>
            <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Building excellence since 2008, we are committed to delivering superior construction services with integrity and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Construction site"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-stone-800">
                15+ Years of Excellence
              </h3>
              <p className="text-stone-600 text-lg leading-relaxed">
                Ravi Builders has been at the forefront of construction innovation, delivering high-quality residential and commercial projects across the region. Our commitment to excellence, attention to detail, and customer satisfaction has made us a trusted name in the construction industry.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <Building className="w-12 h-12 text-terracotta-500 mx-auto mb-3" />
                  <h4 className="text-2xl font-bold text-stone-800">200+</h4>
                  <p className="text-stone-600">Projects Completed</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <Home className="w-12 h-12 text-terracotta-500 mx-auto mb-3" />
                  <h4 className="text-2xl font-bold text-stone-800">500+</h4>
                  <p className="text-stone-600">Happy Families</p>
                </div>
              </div>

              <div className="bg-terracotta-50 p-6 rounded-lg border-l-4 border-terracotta-500">
                <p className="text-stone-700 italic text-lg">
                  "Our mission is to build not just structures, but lasting relationships with our clients by delivering exceptional quality and service."
                </p>
                <p className="text-stone-600 mt-2 font-semibold">- Ravi Kumar, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
