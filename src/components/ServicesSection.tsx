
const ServicesSection = () => {
  const services = [
    {
      service: "Landing Page",
      description: "1-page scroll website with clean design",
      timeline: "2–3 days",
      price: "$199",
      popular: false
    },
    {
      service: "Portfolio Website",
      description: "Multi-section site to showcase personal or client work",
      timeline: "3–5 days",
      price: "$299",
      popular: true
    },
    {
      service: "Business Website",
      description: "3–5 page site for local business",
      timeline: "5–7 days",
      price: "$499",
      popular: false
    },
    {
      service: "AI to Code",
      description: "Convert AI layout to working React site",
      timeline: "1–2 days",
      price: "$149",
      popular: false
    },
    {
      service: "Website Redesign",
      description: "Revamp existing website with a modern look",
      timeline: "3–6 days",
      price: "$299",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Services & Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent, beginner-friendly pricing with fast delivery times. 
            All projects include modern design, responsive layout, and AI-enhanced development.
          </p>
        </div>
        
        <div className="grid gap-4 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up ${
                service.popular ? 'ring-2 ring-electric-400' : ''
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-electric-500 to-coral-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3">
                      <h3 className="text-xl font-bold text-navy-900">
                        {service.service}
                      </h3>
                      <div className="text-2xl font-bold text-electric-600">
                        {service.price}
                      </div>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed mb-3">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="md:ml-6">
                    <div className="inline-flex items-center bg-navy-100 text-navy-800 px-3 py-1 rounded-full font-medium text-sm">
                      ⏱️ {service.timeline}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-electric-50 to-coral-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">
              Why Choose AI-Enhanced Development?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-bold text-navy-800 mb-2">Faster Delivery</h4>
                <p className="text-gray-600">AI tools help me deliver quality work in half the time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="font-bold text-navy-800 mb-2">Smart Solutions</h4>
                <p className="text-gray-600">AI assists in creating optimal code and design patterns</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-navy-800 mb-2">Better Results</h4>
                <p className="text-gray-600">More time for creativity and problem-solving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
