
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Calendar, 
  Target,
  Brain,
  BarChart3,
  Activity
} from "lucide-react";

const Analytics = () => {
  const weeklyData = [
    { day: 'Mon', completed: 8, total: 10 },
    { day: 'Tue', completed: 9, total: 10 },
    { day: 'Wed', completed: 7, total: 10 },
    { day: 'Thu', completed: 10, total: 10 },
    { day: 'Fri', completed: 8, total: 10 },
    { day: 'Sat', completed: 6, total: 10 },
    { day: 'Sun', completed: 9, total: 10 },
  ];

  const insights = [
    {
      title: "Peak Performance Day",
      value: "Thursday",
      description: "You complete 95% more habits on Thursdays",
      icon: TrendingUp,
      color: "green"
    },
    {
      title: "Challenging Time",
      value: "Weekend Mornings",
      description: "30% lower completion rate on Saturday/Sunday AM",
      icon: Calendar,
      color: "orange"
    },
    {
      title: "Best Streak",
      value: "22 Days",
      description: "Meditation - your longest current streak",
      icon: Target,
      color: "blue"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics & Insights</h1>
          <p className="text-gray-600">
            Understand your patterns and optimize your habit formation
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Overall Success Rate</p>
                <p className="text-2xl font-bold text-green-600">87%</p>
              </div>
              <div className="p-3 bg-green-100 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Streaks</p>
                <p className="text-2xl font-bold text-neural-600">8</p>
              </div>
              <div className="p-3 bg-neural-100 rounded-full">
                <Target className="h-6 w-6 text-neural-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-2xl font-bold text-habit-600">57/70</p>
              </div>
              <div className="p-3 bg-habit-100 rounded-full">
                <Calendar className="h-6 w-6 text-habit-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Improvement</p>
                <p className="text-2xl font-bold text-blue-600">+12%</p>
              </div>
              <div className="p-3 bg-blue-100 rounded-full">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Weekly Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Progress</h3>
            <div className="space-y-4">
              {weeklyData.map((day, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 text-sm font-medium text-gray-600">{day.day}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-700">{day.completed}/{day.total}</span>
                      <span className="text-sm text-gray-500">{Math.round((day.completed/day.total) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-neural-500 to-habit-500 h-2 rounded-full"
                        style={{ width: `${(day.completed/day.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Habit Categories */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Category Performance</h3>
            <div className="space-y-4">
              {[
                { category: "Health", completed: 28, total: 35, color: "green" },
                { category: "Learning", completed: 12, total: 14, color: "blue" },
                { category: "Wellness", completed: 21, total: 21, color: "purple" },
                { category: "Productivity", completed: 8, total: 14, color: "orange" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Badge className={`bg-${item.color}-100 text-${item.color}-800`}>
                      {item.category}
                    </Badge>
                    <span className="text-sm text-gray-600">
                      {item.completed}/{item.total}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-${item.color}-500 h-2 rounded-full`}
                        style={{ width: `${(item.completed/item.total) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-12">
                      {Math.round((item.completed/item.total) * 100)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Brain className="h-6 w-6 text-neural-600" />
            <h3 className="text-lg font-semibold text-gray-900">AI-Powered Insights</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={index} className={`p-4 rounded-lg border-l-4 border-${insight.color}-500 bg-${insight.color}-50`}>
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon className={`h-5 w-5 text-${insight.color}-600`} />
                    <h4 className={`font-medium text-${insight.color}-800`}>{insight.title}</h4>
                  </div>
                  <p className={`text-lg font-bold text-${insight.color}-700 mb-1`}>{insight.value}</p>
                  <p className={`text-sm text-${insight.color}-600`}>{insight.description}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="p-6 mt-8">
          <div className="flex items-center space-x-2 mb-6">
            <Activity className="h-6 w-6 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="space-y-3">
            {[
              { action: "Completed Morning Exercise", time: "2 hours ago", streak: "+1 streak" },
              { action: "Missed Evening Reading", time: "Yesterday", streak: "Streak broken" },
              { action: "Completed Meditation", time: "Yesterday", streak: "+1 streak (22 days)" },
              { action: "Added new habit: Drink Water", time: "2 days ago", streak: "New habit" },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
                <Badge 
                  variant="outline"
                  className={activity.streak.includes("broken") ? "border-red-200 text-red-700" : "border-green-200 text-green-700"}
                >
                  {activity.streak}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
