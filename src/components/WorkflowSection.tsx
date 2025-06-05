import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, ArrowRight } from 'lucide-react';

const WorkflowSection = () => {
  const services = [
    {
      title: "Landing Page",
      description: "Perfect for showcasing a single product or service with impact. Ideal for businesses looking to establish their online presence quickly.",
      features: [
        "Custom responsive design",
        "SEO optimization",
        "Contact form integration",
        "Analytics setup",
        "Fast loading speed",
        "Social media integration"
      ]
    },
    {
      title: "3-page Website",
      description: "Comprehensive solution for small businesses needing a professional multi-page website to showcase their services.",
      features: [
        "3 custom designed pages",
        "Mobile-first responsive design",
        "Contact form & maps integration",
        "SEO optimization",
        "Social media integration",
        "Analytics tracking"
      ]
    },
    {
      title: "5-page Website",
      description: "Complete website solution for businesses with multiple services and content needs. Perfect for establishing a strong online presence.",
      features: [
        "5 custom designed pages",
        "Advanced SEO setup",
        "Blog functionality",
        "Newsletter integration",
        "Social media feeds",
        "Advanced analytics"
      ]
    },
    {
      title: "Portfolio Site",
      description: "Showcase your work with a beautiful, interactive portfolio website. Perfect for creatives and professionals.",
      features: [
        "Custom project gallery",
        "Case study pages",
        "Filtering system",
        "Image optimization",
        "Contact integration",
        "Social media links"
      ]
    }
  ];

  const commonFeatures = [
    "Modern & Clean Design",
    "Mobile Responsive",
    "Fast Loading Speed",
    "SEO Optimized",
    "Easy Content Updates",
    "1 Month Support"
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            What I Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-quality, frontend-focused websites designed with precision, built for performance, and delivered fast — powered by AI-enhanced tools for modern businesses and individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-4 group-hover:text-electric-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-navy-900 text-white rounded-xl hover:bg-electric-600 transition-colors duration-300 group"
                >
                  <span className="font-medium">Start Your Project</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-navy-900 mb-6 text-center">
            All Projects Include
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {commonFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
