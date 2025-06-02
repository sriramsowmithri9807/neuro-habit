
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Target, TrendingUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neural-50 to-habit-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-neural-500/10 to-habit-500/10 animate-gradient-x"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-neural-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-habit-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* AI Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-neural-200">
            <Brain className="h-4 w-4 text-neural-600" />
            <span className="text-sm font-medium text-neural-700">Powered by AI</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Track, Learn,{" "}
            <span className="bg-gradient-to-r from-neural-600 via-habit-600 to-neural-700 bg-clip-text text-transparent animate-gradient-x">
              Transform
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build lasting habits with AI-powered insights. NeuroHabits learns your patterns, 
            predicts challenges, and guides you to success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neural-600 to-habit-600 hover:from-neural-700 hover:to-habit-700 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 neural-glow group"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg border-2 border-neural-200 hover:border-neural-300 hover:bg-neural-50 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-neural-100 rounded-full mb-3">
                <Target className="h-6 w-6 text-neural-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">85%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-habit-100 rounded-full mb-3">
                <TrendingUp className="h-6 w-6 text-habit-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">21</div>
              <div className="text-sm text-gray-600">Days to Form</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-neural-100 rounded-full mb-3">
                <Brain className="h-6 w-6 text-neural-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">AI</div>
              <div className="text-sm text-gray-600">Powered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
