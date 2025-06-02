
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Track up to 3 habits",
      "Basic analytics",
      "Simple reminders",
      "Web access",
      "Community support"
    ],
    cta: "Get Started",
    popular: false,
    gradient: "from-gray-100 to-gray-200",
    textColor: "text-gray-900"
  },
  {
    name: "Pro",
    price: "₹199",
    period: "/month",
    description: "For serious habit builders",
    features: [
      "Unlimited habits",
      "AI assistant access",
      "Smart reminders",
      "Advanced analytics",
      "Habit predictions",
      "Priority support",
      "Mobile app access"
    ],
    cta: "Start Free Trial",
    popular: true,
    gradient: "from-neural-500 to-habit-500",
    textColor: "text-white"
  },
  {
    name: "Premium",
    price: "₹399",
    period: "/month",
    description: "Maximum potential unlocked",
    features: [
      "Everything in Pro",
      "Early feature access",
      "1-on-1 coaching",
      "Custom AI models",
      "API access",
      "White-label options",
      "24/7 priority support"
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-purple-500 to-pink-500",
    textColor: "text-white"
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-neural-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-neural-600 to-habit-600 bg-clip-text text-transparent">
              Growth Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and upgrade as you build stronger habits. All plans include our core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-neural-200 shadow-2xl scale-105 z-10' 
                  : 'border-gray-200 hover:border-neural-200 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-neural-500 to-habit-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-habit-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 text-lg font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-neural-600 to-habit-600 hover:from-neural-700 hover:to-habit-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                {plan.popular && <Zap className="mr-2 h-5 w-5" />}
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500">
            <span>✓ Cancel anytime</span>
            <span>✓ 30-day money back</span>
            <span>✓ Data export</span>
          </div>
        </div>
      </div>
    </section>
  );
};
