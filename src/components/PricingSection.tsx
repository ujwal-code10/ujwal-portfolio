
import { Clock, CheckCircle } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const PricingSection = () => {
  const pricingData = [
    {
      service: "Landing Page (1 page)",
      price: "$50",
      delivery: "2–3 days",
      includes: "Responsive + contact form"
    },
    {
      service: "3-page Website",
      price: "$120",
      delivery: "4–5 days",
      includes: "Home + About + Contact"
    },
    {
      service: "5-page Website",
      price: "$200",
      delivery: "6–7 days",
      includes: "Full custom layout, responsive, fast"
    },
    {
      service: "Personal Portfolio",
      price: "$80",
      delivery: "3–4 days",
      includes: "Like this one with real projects"
    },
    {
      service: "Express Delivery",
      price: "+$30",
      delivery: "+24h delivery",
      includes: "For urgent project turnaround"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 mb-4 lg:mb-6">
            Pricing & Delivery
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with fast delivery. All projects include modern design, 
            responsive layout, and professional quality.
          </p>
        </div>
        
        <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-navy-900 hover:bg-navy-900">
                <TableHead className="text-white font-semibold text-xs sm:text-sm lg:text-base">Service</TableHead>
                <TableHead className="text-white font-semibold text-center text-xs sm:text-sm lg:text-base">Price</TableHead>
                <TableHead className="text-white font-semibold text-center text-xs sm:text-sm lg:text-base hidden sm:table-cell">Delivery</TableHead>
                <TableHead className="text-white font-semibold text-xs sm:text-sm lg:text-base hidden md:table-cell">Includes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricingData.map((item, index) => (
                <TableRow 
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-electric-50 transition-colors duration-200 animate-fade-in-up`}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <TableCell className="font-medium text-navy-900 text-xs sm:text-sm lg:text-base">
                    <div>
                      <div className="font-semibold">{item.service}</div>
                      {/* Show delivery and includes on mobile */}
                      <div className="sm:hidden mt-1 space-y-1">
                        <div className="flex items-center gap-1 text-navy-700">
                          <Clock size={12} className="text-coral-500" />
                          <span className="text-xs">{item.delivery}</span>
                        </div>
                        <div className="md:hidden flex items-center gap-1 text-gray-600">
                          <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                          <span className="text-xs">{item.includes}</span>
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-center font-bold text-electric-600 text-xs sm:text-sm lg:text-base">
                    {item.price}
                  </TableCell>
                  <TableCell className="text-center text-navy-700 hidden sm:table-cell">
                    <div className="flex items-center justify-center gap-1 sm:gap-2">
                      <Clock size={12} className="text-coral-500 sm:size-4" />
                      <span className="text-xs sm:text-sm lg:text-base">{item.delivery}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600 hidden md:table-cell">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <CheckCircle size={12} className="text-green-500 flex-shrink-0 sm:size-4" />
                      <span className="text-xs sm:text-sm lg:text-base">{item.includes}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-8 lg:mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-to-r from-electric-50 to-coral-50 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
            <p className="text-sm sm:text-base lg:text-lg text-navy-700 font-medium">
              🚀 All projects include: Modern design, mobile responsiveness, fast loading, 
              and basic SEO optimization. No hidden fees!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
