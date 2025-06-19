
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      text: "Ravi Builders constructed our dream home exactly as we envisioned it. Their attention to detail and quality of work is exceptional. The team was professional and completed the project on time.",
      rating: 5
    },
    {
      name: "Rajesh Patel",
      location: "Pune",
      text: "We hired Ravi Builders for our commercial office building, and they exceeded our expectations. The construction quality is top-notch, and they maintained excellent communication throughout the project.",
      rating: 5
    },
    {
      name: "Anita Desai",
      location: "Bangalore",
      text: "The interior work done by Ravi Builders transformed our home completely. They have a great eye for design and delivered everything within budget. Highly recommended for any construction work.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-stone-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="text-stone-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-stone-200 pt-4">
                  <h4 className="text-lg font-semibold text-stone-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-stone-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
