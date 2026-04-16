import { Calendar, Clock, TrendingUp, CheckCircle } from "lucide-react";

export function Dashboard() {
  const tasks = [
    { id: 1, title: "Complete Math Assignment Chapter 5", subject: "Mathematics", time: "2:00 PM", completed: false, color: "var(--sf-subject-math)" },
    { id: 2, title: "Review Biology Notes", subject: "Biology", time: "4:30 PM", completed: false, color: "var(--sf-subject-science)" },
    { id: 3, title: "History Essay Outline", subject: "History", time: "6:00 PM", completed: false, color: "var(--sf-subject-history)" },
  ];

  const upcomingDeadlines = [
    { title: "Computer Science Project", date: "March 5, 2026", subject: "Computer Science", color: "var(--sf-subject-cs)" },
    { title: "English Literature Paper", date: "March 8, 2026", subject: "English", color: "var(--sf-subject-english)" },
  ];

  const stats = [
    { label: "Study Hours Today", value: "3.5h", goal: "/ 4h", icon: Clock, color: "var(--sf-blue-500)" },
    { label: "Tasks Completed", value: "5", goal: "/ 8", icon: CheckCircle, color: "var(--sf-mint-500)" },
    { label: "Weekly Progress", value: "68%", goal: "", icon: TrendingUp, color: "var(--sf-subject-math)" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--sf-gray-900)' }}>
          Good Afternoon, Alex 👋
        </h1>
        <p className="text-lg" style={{ color: 'var(--sf-gray-600)' }}>
          Sunday, March 1, 2026
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="p-6 rounded-2xl sf-card sf-card-hover">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-sm mb-2" style={{ color: 'var(--sf-gray-600)' }}>
                    {stat.label}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </span>
                    {stat.goal && (
                      <span style={{ color: 'var(--sf-gray-500)' }}>
                        {stat.goal}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ 
                  background: `${stat.color}15`,
                  color: stat.color 
                }}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Today's Tasks */}
        <div className="lg:col-span-2">
          <div className="p-6 rounded-2xl sf-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold" style={{ color: 'var(--sf-gray-900)' }}>
                Today's Tasks
              </h2>
              <Calendar className="w-6 h-6" style={{ color: 'var(--sf-blue-500)' }} />
            </div>
            <div className="space-y-3">
              {tasks.map((task) => (
                <div 
                  key={task.id}
                  className="p-4 rounded-xl border-2 sf-card-hover cursor-pointer"
                  style={{ borderColor: 'var(--sf-gray-200)' }}
                >
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      className="mt-1 w-5 h-5 rounded accent-blue-500 cursor-pointer"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1" style={{ color: 'var(--sf-gray-900)' }}>
                        {task.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className="px-2 py-1 rounded-lg" style={{ 
                          background: `${task.color}15`,
                          color: task.color
                        }}>
                          {task.subject}
                        </span>
                        <span className="flex items-center gap-1" style={{ color: 'var(--sf-gray-500)' }}>
                          <Clock className="w-4 h-4" />
                          {task.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div>
          <div className="p-6 rounded-2xl sf-card mb-6">
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--sf-gray-900)' }}>
              Upcoming Deadlines
            </h2>
            <div className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="p-4 rounded-xl" style={{ background: 'var(--sf-gray-50)' }}>
                  <div className="flex items-start gap-2 mb-2">
                    <div 
                      className="w-2 h-2 rounded-full mt-2" 
                      style={{ background: deadline.color }}
                    ></div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1" style={{ color: 'var(--sf-gray-900)' }}>
                        {deadline.title}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--sf-gray-600)' }}>
                        {deadline.subject}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium" style={{ color: 'var(--sf-blue-600)' }}>
                    Due: {deadline.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 rounded-2xl sf-gradient-blue text-white">
            <h3 className="font-semibold mb-2">Start Focus Session</h3>
            <p className="text-sm opacity-90 mb-4">
              Begin a 25-minute Pomodoro timer
            </p>
            <button className="w-full py-2 rounded-lg bg-white font-medium" style={{ color: 'var(--sf-blue-600)' }}>
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
