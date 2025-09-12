
import { Search, Eye, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search for a salon",
    description: "Find salons by city or service type",
    step: "1"
  },
  {
    icon: Eye,
    title: "View photos and reviews",
    description: "Browse galleries and read customer reviews",
    step: "2"
  },
  {
    icon: MessageCircle,
    title: "Contact or book",
    description: "Connect via WhatsApp or call directly",
    step: "3"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 text-warmgray-900">
            How It Works
          </h2>
          <p className="text-xl text-warmgray-600">
            Find and book your perfect beauty service in 3 easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute top-0 right-1/2 translate-x-[60px] w-8 h-8 bg-white rounded-full border-4 border-purple-200 flex items-center justify-center">
                    <span className="text-purple-600 font-bold">{step.step}</span>
                  </div>
                </div>
                
                <h3 className="text-xl mb-3 text-warmgray-900 font-semibold">{step.title}</h3>
                <p className="text-warmgray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
