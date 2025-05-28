
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Small Business Owner",
      company: "Local Café",
      content: "Ujwal created a beautiful website for my café in just 3 days! The AI-enhanced development approach was impressive - fast delivery without compromising on quality. Our online orders have increased by 150%!",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Rohit Kumar", 
      role: "Startup Founder",
      company: "Tech Startup",
      content: "I was skeptical about AI-assisted development, but Ujwal proved me wrong. The landing page he built for our startup looks professional and converts well. The whole process was smooth and transparent.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Anita Patel",
      role: "Photographer",
      company: "Creative Professional", 
      content: "As a creative professional, I needed a portfolio that truly represented my work. Ujwal understood my vision perfectly and delivered a stunning website that showcases my photography beautifully.",
      rating: 5,
      avatar: "AP"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-navy-50 to-electric-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from real clients who experienced the power of AI-enhanced development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-electric-500 to-coral-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-electric-600 text-sm font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white rounded-3xl p-8 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-electric-600 mb-1">10+</div>
                <p className="text-gray-600 text-sm">Projects Completed</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-500 mb-1">100%</div>
                <p className="text-gray-600 text-sm">Client Satisfaction</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy-600 mb-1">3 Days</div>
                <p className="text-gray-600 text-sm">Average Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
