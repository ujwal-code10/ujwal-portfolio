import { FiCheck, FiClock, FiZap } from 'react-icons/fi';
import { Link } from 'react-scroll';

const ServicesSection = () => {
  const services = [
    {
      title: "Landing Page",
      description: "Perfect for showcasing a product or service",
      price: "$50",
      timeline: "2–3 days",
      features: [
        "Custom design from scratch",
        "Responsive layout",
        "Contact form integration",
        "Basic SEO setup",
        "Analytics integration"
      ]
    },
    {
      title: "3-page Website",
      description: "Ideal for small businesses and startups",
      price: "$120",
      timeline: "4–5 days",
      features: [
        "3 custom pages",
        "Interactive elements",
        "Content management system",
        "Contact form & maps",
        "Social media integration"
      ]
    },
    {
      title: "5-page Website",
      description: "Complete solution for growing businesses",
      price: "$200",
      timeline: "6–7 days",
      features: [
        "5 custom pages",
        "Advanced animations",
        "Blog/News section",
        "Newsletter integration",
        "Advanced SEO setup"
      ]
    },
    {
      title: "Portfolio Website",
      description: "Showcase your work with style",
      price: "$80",
      timeline: "3–4 days",
      features: [
        "Project gallery",
        "Filterable categories",
        "Case study pages",
        "Bio/About section",
        "Contact integration"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            What I Offer
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Frontend services powered by clean design, modern tools, and fast delivery — perfect for individuals, startups, and small businesses.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-3xl font-bold text-indigo-600">
                    {service.price}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                    <FiClock className="mr-2" />
                    {service.timeline}
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <FiCheck className="mr-3 text-indigo-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-center font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Express Delivery Add-on */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FiZap className="text-2xl text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Express Delivery Add-on
                </h3>
                <p className="text-gray-600">
                  Need it faster? Get your project delivered within 24 hours
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-2xl font-bold text-indigo-600">+$30</span>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors duration-200 cursor-pointer"
              >
                Add Express Delivery
              </Link>
            </div>
          </div>
        </div>

        {/* Shared Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">
            All projects include:
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Modern design",
              "Mobile responsiveness",
              "Fast loading",
              "SEO-ready setup",
              "Easy content updates",
              "1-month support"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-3">
                <FiCheck className="text-indigo-500 flex-shrink-0" />
                <span className="text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 