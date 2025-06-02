
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Calendar, 
  BarChart3, 
  Bell, 
  MessageCircle, 
  Zap,
  Target,
  Lightbulb,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Our neural network analyzes your patterns to predict when you're most likely to succeed or struggle.",
    gradient: "from-neural-500 to-neural-600",
    bgGradient: "from-neural-50 to-neural-100"
  },
  {
    icon: Calendar,
    title: "Smart Habit Tracking",
    description: "Intuitive tracking with streak monitoring, completion rates, and personalized goal setting.",
    gradient: "from-habit-500 to-habit-600",
    bgGradient: "from-habit-50 to-habit-100"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Beautiful dashboards with heatmaps, trend analysis, and progress visualization.",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100"
  },
  {
    icon: Bell,
    title: "Intelligent Reminders",
    description: "AI-optimized notifications that adapt to your schedule and learning from your response patterns.",
    gradient: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100"
  },
  {
    icon: MessageCircle,
    title: "AI Chat Assistant",
    description: "Get personalized advice, motivation, and habit suggestions from your AI companion.",
    gradient: "from-emerald-500 to-emerald-600",
    bgGradient: "from-emerald-50 to-emerald-100"
  },
  {
    icon: Zap,
    title: "Habit Prediction",
    description: "Anticipate challenging days and receive proactive support to maintain your streaks.",
    gradient: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-50 to-orange-100"
  },
  {
    icon: Target,
    title: "Goal Optimization",
    description: "AI suggests optimal habit schedules and combinations for maximum success.",
    gradient: "from-red-500 to-red-600",
    bgGradient: "from-red-50 to-red-100"
  },
  {
    icon: Lightbulb,
    title: "Smart Suggestions",
    description: "Discover new habits and improvements based on your lifestyle and preferences.",
    gradient: "from-yellow-500 to-yellow-600",
    bgGradient: "from-yellow-50 to-yellow-100"
  },
  {
    icon: TrendingUp,
    title: "Progress Acceleration",
    description: "Machine learning identifies what works best for you and amplifies those strategies.",
    gradient: "from-indigo-500 to-indigo-600",
    bgGradient: "from-indigo-50 to-indigo-100"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Powered by{" "}
            <span className="bg-gradient-to-r from-neural-600 to-habit-600 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of habit formation with AI that understands your unique patterns and guides you to lasting change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white group cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.bgGradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-6 w-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-neural-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
