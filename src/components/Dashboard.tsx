
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, TrendingUp, Brain, Target, Clock } from "lucide-react";

export const DashboardPreview = () => {
  const habits = [
    { name: "Morning Meditation", streak: 12, completion: 85, status: "completed" },
    { name: "Daily Exercise", streak: 8, completion: 73, status: "pending" },
    { name: "Read for 30min", streak: 15, completion: 92, status: "completed" },
    { name: "Drink 8 Glasses Water", streak: 5, completion: 68, status: "pending" }
  ];

  const weeklyData = [
    { day: "Mon", completed: 3, total: 4 },
    { day: "Tue", completed: 4, total: 4 },
    { day: "Wed", completed: 2, total: 4 },
    { day: "Thu", completed: 4, total: 4 },
    { day: "Fri", completed: 3, total: 4 },
    { day: "Sat", completed: 4, total: 4 },
    { day: "Sun", completed: 3, total: 4 }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Personal{" "}
            <span className="bg-gradient-to-r from-neural-600 to-habit-600 bg-clip-text text-transparent">
              Command Center
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get a bird's eye view of your progress with intuitive dashboards and AI-powered insights.
          </p>
        </div>

        {/* Dashboard Mock-up */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-neural-50 rounded-3xl p-8 shadow-2xl border border-gray-200">
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Good morning, Alex! 👋</h3>
                <p className="text-gray-600">You're doing great! 3 out of 4 habits completed today.</p>
              </div>
              <div className="flex items-center space-x-2 mt-4 md:mt-0">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  🔥 12 day streak
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  85% this week
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Today's Progress</p>
                    <p className="text-2xl font-bold text-gray-900">3/4</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-habit-500" />
                </div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Best Streak</p>
                    <p className="text-2xl font-bold text-gray-900">15</p>
                  </div>
                  <Target className="h-8 w-8 text-neural-500" />
                </div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Avg. Completion</p>
                    <p className="text-2xl font-bold text-gray-900">79%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                </div>
              </Card>
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">AI Score</p>
                    <p className="text-2xl font-bold text-gray-900">A+</p>
                  </div>
                  <Brain className="h-8 w-8 text-purple-500" />
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Today's Habits */}
              <div className="lg:col-span-2">
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg h-full">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-semibold text-gray-900">Today's Habits</h4>
                    <Button size="sm" variant="outline">Add Habit</Button>
                  </div>
                  <div className="space-y-4">
                    {habits.map((habit, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            habit.status === 'completed' ? 'bg-habit-500 text-white' : 'bg-gray-300'
                          }`}>
                            {habit.status === 'completed' && <CheckCircle className="h-4 w-4" />}
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{habit.name}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>🔥 {habit.streak} days</span>
                              <span>{habit.completion}% this month</span>
                            </div>
                          </div>
                        </div>
                        <Button size="sm" variant={habit.status === 'completed' ? 'outline' : 'default'}>
                          {habit.status === 'completed' ? 'Done' : 'Mark Complete'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* AI Insights & Weekly Progress */}
              <div className="space-y-6">
                {/* AI Insights */}
                <Card className="p-6 bg-gradient-to-br from-neural-500 to-habit-500 text-white border-0 shadow-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <Brain className="h-5 w-5" />
                    <h4 className="font-semibold">AI Insights</h4>
                  </div>
                  <p className="text-sm opacity-90 mb-4">
                    Your meditation streak is impressive! Consider adding a 5-minute evening session to boost consistency.
                  </p>
                  <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    View More
                  </Button>
                </Card>

                {/* Weekly Progress */}
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">This Week</h4>
                  <div className="space-y-3">
                    {weeklyData.map((day, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 w-8">{day.day}</span>
                        <div className="flex-1 mx-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-neural-500 to-habit-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(day.completed / day.total) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-600">{day.completed}/{day.total}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-neural-600 to-habit-600 hover:from-neural-700 hover:to-habit-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Try the Dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};
