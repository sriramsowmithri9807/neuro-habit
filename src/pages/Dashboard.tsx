
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Calendar,
  CheckCircle,
  Plus,
  Edit,
  Trash2
} from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Morning Exercise", completed: true, streak: 15 },
    { id: 2, name: "Read 30 Minutes", completed: false, streak: 8 },
    { id: 3, name: "Meditate", completed: true, streak: 22 },
    { id: 4, name: "Drink 8 Glasses Water", completed: false, streak: 5 },
  ]);
  
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");

  const stats = [
    { label: "Active Habits", value: "12", icon: Target },
    { label: "Completed Today", value: "8", icon: CheckCircle },
    { label: "Current Streak", value: "22", icon: TrendingUp },
    { label: "This Month", value: "89%", icon: Calendar },
  ];

  const addTask = () => {
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        name: newTask,
        completed: false,
        streak: 0
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEdit = (task) => {
    setEditingTask(task.id);
    setEditText(task.name);
  };

  const saveEdit = () => {
    setTasks(tasks.map(task => 
      task.id === editingTask 
        ? { ...task, name: editText }
        : task
    ));
    setEditingTask(null);
    setEditText("");
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Good morning! Ready to build habits?
          </h1>
          <p className="text-gray-600">
            Track your progress and stay consistent with your goals.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-neural-100 rounded-full">
                    <Icon className="h-6 w-6 text-neural-600" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Today's Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Today's Tasks</h2>
            </div>
            
            {/* Add Task */}
            <div className="flex space-x-2 mb-6">
              <Input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
              />
              <Button onClick={addTask} className="bg-neural-600 hover:bg-neural-700">
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className={`flex items-center justify-between p-4 rounded-lg border-2 transition-colors ${
                    task.completed
                      ? 'bg-green-50 border-green-200'
                      : 'bg-white border-gray-200 hover:border-neural-200'
                  }`}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <button
                      onClick={() => toggleComplete(task.id)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        task.completed
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-gray-300 hover:border-neural-400'
                      }`}
                    >
                      {task.completed && <CheckCircle className="h-4 w-4" />}
                    </button>
                    <div className="flex-1">
                      {editingTask === task.id ? (
                        <div className="flex space-x-2">
                          <Input
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                            className="flex-1"
                          />
                          <Button size="sm" onClick={saveEdit}>Save</Button>
                          <Button size="sm" variant="outline" onClick={() => setEditingTask(null)}>Cancel</Button>
                        </div>
                      ) : (
                        <>
                          <p className={`font-medium ${task.completed ? 'text-green-800' : 'text-gray-900'}`}>
                            {task.name}
                          </p>
                          <p className="text-sm text-gray-500">{task.streak} day streak</p>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {editingTask !== task.id && (
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => startEdit(task)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteTask(task.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* AI Insights */}
          <Card className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="h-6 w-6 text-neural-600" />
              <h2 className="text-xl font-semibold text-gray-900">AI Insights</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-neural-50 rounded-lg">
                <h3 className="font-medium text-neural-800 mb-2">💡 Pattern Detected</h3>
                <p className="text-sm text-neural-700">
                  You're 85% more likely to complete exercise when you do it before 9 AM.
                </p>
              </div>
              <div className="p-4 bg-habit-50 rounded-lg">
                <h3 className="font-medium text-habit-800 mb-2">🔥 Streak Alert</h3>
                <p className="text-sm text-habit-700">
                  Your meditation streak is at 22 days! Keep it up to reach your 30-day goal.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">📈 Weekly Prediction</h3>
                <p className="text-sm text-blue-700">
                  Based on your patterns, you're likely to achieve 91% completion this week.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
