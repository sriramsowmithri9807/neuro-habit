
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Calendar,
  Target,
  Clock,
  Repeat,
  ArrowRight,
  Heart,
  Book,
  Brain,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const Habits = () => {
  const habitCategories = [
    {
      name: "Health",
      icon: Heart,
      count: 4,
      color: "bg-green-100 text-green-800",
      path: "/habits/health",
      description: "Physical wellness and fitness habits"
    },
    {
      name: "Learning",
      icon: Book,
      count: 3,
      color: "bg-blue-100 text-blue-800",
      path: "/habits/learning",
      description: "Knowledge and skill development"
    },
    {
      name: "Wellness",
      icon: Brain,
      count: 2,
      color: "bg-purple-100 text-purple-800",
      path: "/habits/wellness",
      description: "Mental and emotional well-being"
    },
    {
      name: "Productivity",
      icon: Zap,
      count: 5,
      color: "bg-orange-100 text-orange-800",
      path: "/habits/productivity",
      description: "Efficiency and workflow optimization"
    },
  ];

  const recentHabits = [
    {
      id: 1,
      name: "Morning Exercise",
      description: "30 minutes of cardio or strength training",
      category: "Health",
      frequency: "Daily",
      streak: 15,
      completionRate: 85,
      status: "active"
    },
    {
      id: 2,
      name: "Read for 30 minutes",
      description: "Read books related to personal development",
      category: "Learning",
      frequency: "Daily",
      streak: 8,
      completionRate: 92,
      status: "active"
    },
    {
      id: 3,
      name: "Meditate",
      description: "10 minutes of mindfulness meditation",
      category: "Wellness",
      frequency: "Daily",
      streak: 22,
      completionRate: 95,
      status: "active"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Habits</h1>
            <p className="text-gray-600">Create and manage your daily habits by category</p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {habitCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} to={category.path}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-full ${category.color.replace('text-', 'bg-').replace('-800', '-200')}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-neural-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge className={category.color}>
                      {category.count} habits
                    </Badge>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Recent Habits */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Habits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentHabits.map((habit) => (
              <Card key={habit.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {habit.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{habit.description}</p>
                    <Badge 
                      variant="outline" 
                      className={`${
                        habit.category === 'Health' ? 'border-green-200 text-green-700 bg-green-50' :
                        habit.category === 'Learning' ? 'border-blue-200 text-blue-700 bg-blue-50' :
                        habit.category === 'Wellness' ? 'border-purple-200 text-purple-700 bg-purple-50' :
                        'border-orange-200 text-orange-700 bg-orange-50'
                      }`}
                    >
                      {habit.category}
                    </Badge>
                  </div>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-neural-600" />
                      <span className="text-sm text-gray-600">Current Streak</span>
                    </div>
                    <span className="font-semibold text-neural-700">{habit.streak} days</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Repeat className="h-4 w-4 text-habit-600" />
                      <span className="text-sm text-gray-600">Frequency</span>
                    </div>
                    <span className="font-semibold text-habit-700">{habit.frequency}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Completion Rate</span>
                    </div>
                    <span className="font-semibold text-blue-700">{habit.completionRate}%</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-500">Progress</span>
                    <span className="text-xs text-gray-500">{habit.completionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-neural-500 to-habit-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${habit.completionRate}%` }}
                    ></div>
                  </div>
                </div>

                {/* Status */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Badge 
                    className="bg-green-100 text-green-800"
                  >
                    ✓ Active
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start">
              <Plus className="h-4 w-4 mr-2" />
              Add Habit Template
            </Button>
            <Button variant="outline" className="justify-start">
              <Clock className="h-4 w-4 mr-2" />
              Set Reminder Times
            </Button>
            <Button variant="outline" className="justify-start">
              <Target className="h-4 w-4 mr-2" />
              Set Weekly Goals
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habits;
