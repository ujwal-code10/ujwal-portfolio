
const ServicesSection = () => {
  const services = [
    {
      service: "Landing Page",
      description: "1-page scroll website with clean design",
      timeline: "2–3 days",
      price: "₹1,499",
      popular: false
    },
    {
      service: "Portfolio Website",
      description: "Multi-section site to showcase personal or client work",
      timeline: "3–5 days",
      price: "₹2,499",
      popular: true
    },
    {
      service: "Business Website",
      description: "3–5 page site for local business",
      timeline: "5–7 days",
      price: "₹3,999",
      popular: false
    },
    {
      service: "AI to Code",
      description: "Convert AI layout to working React site",
      timeline: "1–2 days",
      price: "₹999",
      popular: false
    },
    {
      service: "Website Redesign",
      description: "Revamp existing website with a modern look",
      timeline: "3–6 days",
      price: "₹2,499",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            Services & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, beginner-friendly pricing with fast delivery times. 
            All projects include modern design, responsive layout, and AI-enhanced development.
          </p>
        </div>
        
        <div className="grid gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up ${
                service.popular ? 'ring-2 ring-electric-400 scale-105' : ''
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-electric-500 to-coral-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-4 gap-4 md:gap-6 items-center">
                  <div className="md:col-span-1">
                    <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">
                      {service.service}
                    </h3>
                    <div className="text-2xl md:text-3xl font-bold text-electric-600">
                      {service.price}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3 md:mb-0">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="md:col-span-1 text-center md:text-right">
                    <div className="inline-flex items-center bg-navy-100 text-navy-800 px-4 py-2 rounded-full font-semibold mb-4 md:mb-0">
                      ⏱️ {service.timeline}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-electric-50 to-coral-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-navy-900 mb-6">
              Why Choose AI-Enhanced Development?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="font-bold text-navy-800 mb-2">Faster Delivery</h4>
                <p className="text-gray-600">AI tools help me deliver quality work in half the time</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="font-bold text-navy-800 mb-2">Smart Solutions</h4>
                <p className="text-gray-600">AI assists in creating optimal code and design patterns</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
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
