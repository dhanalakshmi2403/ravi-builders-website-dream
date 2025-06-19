
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Modern Villa Complex",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Luxury villa complex with modern amenities"
    },
    {
      title: "Commercial Tower",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "15-story commercial office building"
    },
    {
      title: "Residential Apartments",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "100-unit residential apartment complex"
    },
    {
      title: "Shopping Complex",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Multi-level retail and shopping center"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Our Projects
            </h2>
            <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-6"></div>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Take a look at some of our completed projects that showcase our commitment to quality and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-terracotta-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-stone-600 text-lg">
              Want to see more of our work? 
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-terracotta-500 hover:text-terracotta-600 font-semibold ml-2 underline"
              >
                Contact us for a portfolio review
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
