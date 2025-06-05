import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-br from-navy-50 to-electric-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-3">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from real clients who experienced the power of AI-enhanced development.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto min-h-[300px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-electric-500 to-coral-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-navy-900 text-base">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
                    <p className="text-electric-600 text-sm font-medium">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base">★</span>
                  ))}
                </div>
                
                <p className="text-gray-700 leading-relaxed italic text-sm lg:text-base">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-50 transition-colors"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="w-5 h-5 text-navy-900" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-50 transition-colors"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="w-5 h-5 text-navy-900" />
          </button>
        </div>

        <div className="mt-8 lg:mt-10 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
            <div className="flex items-center justify-center space-x-6 lg:space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-600 mb-1">10+</div>
                <p className="text-gray-600 text-xs lg:text-sm">Projects Done</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coral-500 mb-1">100%</div>
                <p className="text-gray-600 text-xs lg:text-sm">Satisfaction</p>
              </div>
              <div className="w-px h-10 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy-600 mb-1">3 Days</div>
                <p className="text-gray-600 text-xs lg:text-sm">Avg. Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
