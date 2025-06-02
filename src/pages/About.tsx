
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Users, 
  Target, 
  Award,
  Heart,
  Lightbulb,
  TrendingUp,
  Mail
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-founder",
      bio: "Former neuroscientist turned entrepreneur. PhD in Behavioral Psychology from Stanford.",
      image: "SC"
    },
    {
      name: "Alex Rodriguez",
      role: "CTO & Co-founder", 
      bio: "AI/ML expert with 10+ years at Google. Specialized in behavioral prediction algorithms.",
      image: "AR"
    },
    {
      name: "Dr. Maya Patel",
      role: "Head of AI Research",
      bio: "Leading researcher in habit formation and neural networks. Published author on behavior change.",
      image: "MP"
    },
    {
      name: "James Wilson",
      role: "Head of Product",
      bio: "Product designer with expertise in habit-forming apps. Previously at Headspace and Calm.",
      image: "JW"
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Science-Driven",
      description: "Every feature is backed by peer-reviewed research in behavioral psychology and neuroscience."
    },
    {
      icon: Heart,
      title: "Human-Centered", 
      description: "We believe technology should serve people, not the other way around. Privacy and wellbeing come first."
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "Our success is measured by your success. We're committed to helping you achieve lasting change."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible with AI-powered habit formation."
    }
  ];

  const milestones = [
    { year: "2023", event: "NeuroHabits founded", description: "Started with a simple idea: make habit formation scientific and accessible" },
    { year: "2023", event: "AI model development", description: "Built our first habit prediction algorithm using behavioral data" },
    { year: "2024", event: "Beta launch", description: "Released to 1,000 beta users with 87% success rate" },
    { year: "2024", event: "Public launch", description: "Officially launched to the public with advanced AI features" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-neural-50 to-habit-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Building the Future of{" "}
            <span className="bg-gradient-to-r from-neural-600 to-habit-600 bg-clip-text text-transparent">
              Habit Formation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're on a mission to help millions of people build lasting habits through the power of artificial intelligence and behavioral science.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-neural-600 hover:bg-neural-700">
              Join Our Mission
            </Button>
            <Button size="lg" variant="outline">
              Meet the Team
            </Button>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              NeuroHabits was born from a simple observation: most people know what habits they want to build, 
              but struggle with the "how" and "when." Traditional habit apps focus on tracking, but we realized 
              the real power lies in understanding patterns and predicting behavior.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Problem</h3>
              <p className="text-gray-600 mb-6">
                Research shows that 92% of people fail to stick to their new habits. Existing solutions 
                treat everyone the same, ignoring the fact that habit formation is deeply personal and 
                influenced by countless individual factors.
              </p>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Solution</h3>
              <p className="text-gray-600">
                By combining AI with behavioral science, we created a system that learns from your unique 
                patterns, predicts your challenges, and provides personalized guidance exactly when you need it most.
              </p>
            </div>
            <div className="bg-gradient-to-br from-neural-100 to-habit-100 rounded-lg p-8">
              <div className="text-center">
                <Brain className="h-16 w-16 text-neural-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">85% Success Rate</h4>
                <p className="text-gray-600">
                  Our users achieve an 85% habit completion rate, compared to the industry average of 8%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-neural-500 to-habit-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Passionate experts in neuroscience, AI, and human behavior
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-neural-500 to-habit-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-neural-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600">
              From concept to helping thousands transform their lives
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-neural-600 rounded-full flex items-center justify-center text-white font-bold">
                  {milestone.year.slice(-2)}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{milestone.event}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact by Numbers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Users", icon: Users },
              { number: "85%", label: "Success Rate", icon: Target },
              { number: "50K+", label: "Habits Tracked", icon: TrendingUp },
              { number: "15+", label: "Research Papers", icon: Award },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-neural-500 to-habit-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-neural-600 to-habit-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-neural-100 mb-8">
            Whether you're looking to build better habits or join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-neural-600 hover:bg-gray-50">
              Start Building Habits
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-neural-600">
              <Mail className="h-4 w-4 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
