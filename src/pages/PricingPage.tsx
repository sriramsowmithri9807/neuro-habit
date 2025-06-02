
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star, Zap, Crown } from "lucide-react";

const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started with habit tracking",
      features: [
        "Track up to 3 habits",
        "Basic analytics dashboard",
        "Simple daily reminders",
        "Web app access",
        "Community support",
        "Basic progress tracking"
      ],
      cta: "Get Started Free",
      popular: false,
      gradient: "from-gray-100 to-gray-200",
      textColor: "text-gray-900",
      buttonStyle: "bg-gray-900 hover:bg-gray-800 text-white"
    },
    {
      name: "Pro",
      price: "₹199",
      period: "/month",
      description: "For serious habit builders who want AI insights",
      features: [
        "Unlimited habit tracking",
        "AI-powered insights & predictions",
        "Smart reminder optimization",
        "Advanced analytics & reports",
        "Habit streak analytics",
        "Priority email support",
        "Mobile app access",
        "Custom habit categories",
        "Goal setting & tracking"
      ],
      cta: "Start 14-Day Free Trial",
      popular: true,
      gradient: "from-neural-500 to-habit-500",
      textColor: "text-white",
      buttonStyle: "bg-white text-neural-600 hover:bg-gray-50"
    },
    {
      name: "Premium",
      price: "₹399",
      period: "/month",
      description: "Maximum potential with personalized coaching",
      features: [
        "Everything in Pro",
        "1-on-1 AI habit coaching",
        "Custom AI model training",
        "Advanced behavior predictions",
        "Habit formation workshops",
        "API access for integrations",
        "White-label options",
        "24/7 priority support",
        "Early access to new features",
        "Personal success manager"
      ],
      cta: "Contact Sales",
      popular: false,
      gradient: "from-purple-500 to-pink-500",
      textColor: "text-white",
      buttonStyle: "bg-white text-purple-600 hover:bg-gray-50"
    }
  ];

  const faqs = [
    {
      question: "How does the AI-powered habit tracking work?",
      answer: "Our AI analyzes your completion patterns, identifies optimal times for habits, predicts challenging days, and provides personalized suggestions to improve your success rate."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to premium features until the end of your billing period."
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: "Yes! We offer a 14-day free trial for both Pro and Premium plans. No credit card required to start."
    },
    {
      question: "What happens to my data if I downgrade?",
      answer: "Your data is never deleted. If you downgrade to the free plan, you'll be limited to tracking 3 habits, but all your historical data remains safe."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-neural-50">
      {/* Header */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-neural-600 to-habit-600 bg-clip-text text-transparent">
              Growth Plan
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free and upgrade as you build stronger habits. All plans include our core tracking features with no setup fees.
          </p>
          <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Check className="h-4 w-4 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="h-4 w-4 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-1">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <div className="flex items-center justify-center mb-4">
                    {plan.name === 'Premium' && <Crown className="h-6 w-6 text-purple-500 mr-2" />}
                    {plan.name === 'Pro' && <Zap className="h-6 w-6 text-neural-500 mr-2" />}
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-habit-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-6 text-lg font-medium transition-all duration-300 ${plan.buttonStyle}`}
                >
                  {plan.popular && <Zap className="mr-2 h-5 w-5" />}
                  {plan.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Comparison */}
      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare All Features</h2>
            <p className="text-gray-600">See exactly what's included in each plan</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="font-semibold text-gray-900">Features</div>
              <div className="text-center font-semibold text-gray-900">Free</div>
              <div className="text-center font-semibold text-neural-600">Pro</div>
              <div className="text-center font-semibold text-purple-600">Premium</div>
            </div>

            {[
              { feature: "Habit Tracking", free: "3 habits", pro: "Unlimited", premium: "Unlimited" },
              { feature: "Analytics Dashboard", free: "Basic", pro: "Advanced", premium: "Advanced + Custom" },
              { feature: "AI Insights", free: "❌", pro: "✅", premium: "✅ + Personalized" },
              { feature: "Smart Reminders", free: "Basic", pro: "AI-Optimized", premium: "AI-Optimized + Custom" },
              { feature: "Mobile App", free: "❌", pro: "✅", premium: "✅" },
              { feature: "API Access", free: "❌", pro: "❌", premium: "✅" },
              { feature: "Support", free: "Community", pro: "Email", premium: "24/7 Priority" },
            ].map((row, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 py-3 border-b border-gray-200">
                <div className="font-medium text-gray-900">{row.feature}</div>
                <div className="text-center text-gray-600">{row.free}</div>
                <div className="text-center text-neural-600">{row.pro}</div>
                <div className="text-center text-purple-600">{row.premium}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about NeuroHabits</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Button variant="outline" className="mr-4">Contact Support</Button>
            <Button className="bg-neural-600 hover:bg-neural-700">Schedule a Demo</Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-neural-600 to-habit-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Habits?
          </h2>
          <p className="text-xl text-neural-100 mb-8">
            Join thousands of users who have successfully built lasting habits with NeuroHabits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-neural-600 hover:bg-gray-50 px-8 py-4">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-neural-600 px-8 py-4">
              View Demo
            </Button>
          </div>
          <p className="text-sm text-neural-200 mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
