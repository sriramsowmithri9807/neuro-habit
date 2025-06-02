import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Target,
  Repeat,
  Calendar,
  ArrowLeft
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Productivity = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: "Plan My Day",
      description: "Review tasks and set priorities for the day",
      frequency: "Daily",
      streak: 18,
      completionRate: 89,
      status: "active"
    },
    {
      id: 2,
      name: "Weekly Review",
      description: "Reflect on accomplishments and plan next week",
      frequency: "Weekly",
      streak: 3,
      completionRate: 75,
      status: "active"
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newHabit, setNewHabit] = useState({
    name: "",
    description: "",
    frequency: "Daily"
  });

  const addHabit = () => {
    if (newHabit.name.trim()) {
      const habit = {
        id: Date.now(),
        ...newHabit,
        streak: 0,
        completionRate: 0,
        status: "active"
      };
      setHabits([...habits, habit]);
      setNewHabit({ name: "", description: "", frequency: "Daily" });
      setShowForm(false);
    }
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link to="/habits" className="mr-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Habits
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Productivity Habits</h1>
            <p className="text-gray-600">Optimize your workflow and efficiency</p>
          </div>
          <Button 
            onClick={() => setShowForm(!showForm)}
            className="bg-neural-600 hover:bg-neural-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create New Habit
          </Button>
        </div>

        {/* New Habit Form */}
        {showForm && (
          <Card className="p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">Create New Productivity Habit</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Habit Name</label>
                <Input
                  value={newHabit.name}
                  onChange={(e) => setNewHabit({...newHabit, name: e.target.value})}
                  placeholder="e.g., Time Blocking"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  value={newHabit.description}
                  onChange={(e) => setNewHabit({...newHabit, description: e.target.value})}
                  placeholder="Describe your productivity practice..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Frequency</label>
                <select 
                  className="w-full p-2 border rounded-md"
                  value={newHabit.frequency}
                  onChange={(e) => setNewHabit({...newHabit, frequency: e.target.value})}
                >
                  <option value="Daily">Daily</option>
                  <option value="Weekdays">Weekdays</option>
                  <option value="Weekly">Weekly</option>
                </select>
              </div>
              <div className="flex space-x-2">
                <Button onClick={addHabit} className="bg-neural-600 hover:bg-neural-700">
                  Create Habit
                </Button>
                <Button variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Habits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {habits.map((habit) => (
            <Card key={habit.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {habit.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{habit.description}</p>
                  <Badge className="bg-orange-100 text-orange-800">
                    Productivity
                  </Badge>
                </div>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => deleteHabit(habit.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Stats and Progress sections */}
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
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productivity;
