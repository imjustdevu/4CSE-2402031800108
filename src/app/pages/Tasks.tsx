import { Plus, Flag, CheckCircle } from "lucide-react";
import { useState } from "react";

interface Task {
  id: number;
  title: string;
  subject: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
  color: string;
}

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Complete Math Assignment Chapter 5", subject: "Mathematics", priority: "high", completed: false, color: "var(--sf-subject-math)" },
    { id: 2, title: "Review Biology Notes - Cell Structure", subject: "Biology", priority: "medium", completed: false, color: "var(--sf-subject-science)" },
    { id: 3, title: "History Essay Outline", subject: "History", priority: "high", completed: false, color: "var(--sf-subject-history)" },
    { id: 4, title: "Read English Literature Chapter 7", subject: "English", priority: "low", completed: false, color: "var(--sf-subject-english)" },
    { id: 5, title: "Computer Science Project Documentation", subject: "CS", priority: "medium", completed: false, color: "var(--sf-subject-cs)" },
    { id: 6, title: "Practice Python Exercises", subject: "CS", priority: "low", completed: true, color: "var(--sf-subject-cs)" },
    { id: 7, title: "Review Chemistry Lab Results", subject: "Science", priority: "medium", completed: true, color: "var(--sf-subject-science)" },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const priorityColors = {
    high: "var(--sf-error)",
    medium: "var(--sf-warning)",
    low: "var(--sf-mint-500)",
  };

  const activeTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--sf-gray-900)' }}>
            Task Manager
          </h1>
          <p className="text-lg" style={{ color: 'var(--sf-gray-600)' }}>
            {activeTasks.length} tasks remaining
          </p>
        </div>
        <button className="px-6 py-3 rounded-xl font-medium text-white sf-gradient-blue hover:opacity-90 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Task
        </button>
      </div>

      {/* Active Tasks */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--sf-gray-900)' }}>
          To Do
        </h2>
        <div className="space-y-3">
          {activeTasks.map((task) => (
            <div
              key={task.id}
              className="p-5 rounded-2xl sf-card sf-card-hover"
            >
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="mt-1 w-5 h-5 rounded accent-blue-500 cursor-pointer"
                />
                <div className="flex-1">
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--sf-gray-900)' }}>
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg text-sm font-medium" style={{
                      background: `${task.color}15`,
                      color: task.color
                    }}>
                      {task.subject}
                    </span>
                    <div className="flex items-center gap-1 text-sm font-medium" style={{
                      color: priorityColors[task.priority]
                    }}>
                      <Flag className="w-4 h-4" />
                      {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Completed Tasks */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle className="w-6 h-6" style={{ color: 'var(--sf-mint-500)' }} />
          <h2 className="text-2xl font-bold" style={{ color: 'var(--sf-gray-900)' }}>
            Completed
          </h2>
          <span className="px-3 py-1 rounded-full text-sm font-medium" style={{
            background: 'var(--sf-mint-50)',
            color: 'var(--sf-mint-700)'
          }}>
            {completedTasks.length}
          </span>
        </div>
        <div className="space-y-3">
          {completedTasks.map((task) => (
            <div
              key={task.id}
              className="p-5 rounded-2xl sf-card opacity-60"
            >
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="mt-1 w-5 h-5 rounded accent-blue-500 cursor-pointer"
                />
                <div className="flex-1">
                  <h3 className="font-semibold mb-2 line-through" style={{ color: 'var(--sf-gray-600)' }}>
                    {task.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg text-sm font-medium" style={{
                      background: 'var(--sf-gray-100)',
                      color: 'var(--sf-gray-500)'
                    }}>
                      {task.subject}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
