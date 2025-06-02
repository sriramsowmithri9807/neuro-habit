
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Settings, 
  Bell, 
  Shield,
  Crown,
  Calendar,
  Target,
  Award,
  Mail,
  Phone
} from "lucide-react";

const Profile = () => {
  const achievements = [
    { name: "First Week", description: "Completed 7 days of habits", date: "Jan 15, 2024", icon: "🎯" },
    { name: "Streak Master", description: "Reached 30-day streak", date: "Feb 20, 2024", icon: "🔥" },
    { name: "Habit Builder", description: "Created 10 different habits", date: "Mar 5, 2024", icon: "🏗️" },
    { name: "Consistency King", description: "90% completion rate for a month", date: "Mar 25, 2024", icon: "👑" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-6">
                <User className="h-6 w-6 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
              </div>
              
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-neural-500 to-habit-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  JD
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-900">John Doe</h4>
                  <p className="text-gray-600">john.doe@example.com</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Crown className="h-4 w-4 text-yellow-500" />
                    <Badge className="bg-yellow-100 text-yellow-800">Pro Member</Badge>
                  </div>
                </div>
                <Button variant="outline">Edit Profile</Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="p-3 bg-gray-50 rounded-lg text-gray-900">John Doe</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="p-3 bg-gray-50 rounded-lg text-gray-900">john.doe@example.com</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="p-3 bg-gray-50 rounded-lg text-gray-900">+1 (555) 123-4567</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                  <div className="p-3 bg-gray-50 rounded-lg text-gray-900">EST (UTC-5)</div>
                </div>
              </div>
            </Card>

            {/* Notification Settings */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Bell className="h-6 w-6 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Notification Preferences</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: "Daily Habit Reminders", description: "Get reminded about your daily habits", enabled: true },
                  { name: "Weekly Progress Reports", description: "Receive weekly analytics via email", enabled: true },
                  { name: "Achievement Notifications", description: "Get notified when you unlock achievements", enabled: true },
                  { name: "AI Insights", description: "Receive personalized insights and suggestions", enabled: false },
                  { name: "Marketing Emails", description: "Updates about new features and tips", enabled: false },
                ].map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{setting.name}</h4>
                      <p className="text-sm text-gray-600">{setting.description}</p>
                    </div>
                    <div className={`w-12 h-6 rounded-full p-1 transition-colors ${
                      setting.enabled ? 'bg-neural-500' : 'bg-gray-300'
                    }`}>
                      <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        setting.enabled ? 'translate-x-6' : 'translate-x-0'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Privacy & Security */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Shield className="h-6 w-6 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Privacy & Security</h3>
              </div>
              
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Two-Factor Authentication
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="h-4 w-4 mr-2" />
                  Privacy Settings
                </Button>
                <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                  <User className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Stats Card */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-neural-600" />
                    <span className="text-sm text-gray-600">Member Since</span>
                  </div>
                  <span className="font-medium text-gray-900">Jan 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-habit-600" />
                    <span className="text-sm text-gray-600">Total Habits</span>
                  </div>
                  <span className="font-medium text-gray-900">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm text-gray-600">Achievements</span>
                  </div>
                  <span className="font-medium text-gray-900">4</span>
                </div>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-gray-900">Recent Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-900">{achievement.name}</h4>
                      <p className="text-xs text-gray-600">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Achievements
              </Button>
            </Card>

            {/* Subscription */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="h-6 w-6 text-yellow-600" />
                <h3 className="text-lg font-semibold text-gray-900">Subscription</h3>
              </div>
              <div className="text-center">
                <Badge className="bg-yellow-100 text-yellow-800 mb-3">Pro Plan</Badge>
                <p className="text-sm text-gray-600 mb-4">
                  Your subscription renews on April 15, 2024
                </p>
                <Button variant="outline" className="w-full">
                  Manage Subscription
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
