import { TrendingUp, Clock, Target, BookOpen } from "lucide-react";

export function Progress() {
  const weeklyProgress = [
    { day: "Mon", hours: 4, goal: 4 },
    { day: "Tue", hours: 3.5, goal: 4 },
    { day: "Wed", hours: 4.5, goal: 4 },
    { day: "Thu", hours: 3, goal: 4 },
    { day: "Fri", hours: 5, goal: 4 },
    { day: "Sat", hours: 2, goal: 4 },
    { day: "Sun", hours: 3.5, goal: 4 },
  ];

  const subjects = [
    { name: "Mathematics", progress: 75, hours: 28, color: "var(--sf-subject-math)" },
    { name: "Computer Science", progress: 68, hours: 24, color: "var(--sf-subject-cs)" },
    { name: "English Literature", progress: 82, hours: 20, color: "var(--sf-subject-english)" },
    { name: "History", progress: 60, hours: 18, color: "var(--sf-subject-history)" },
    { name: "Biology", progress: 71, hours: 22, color: "var(--sf-subject-science)" },
  ];

  const stats = [
    { label: "Total Study Hours", value: "112h", subtitle: "This month", icon: Clock, color: "var(--sf-blue-500)" },
    { label: "Completion Rate", value: "73%", subtitle: "+5% from last week", icon: Target, color: "var(--sf-mint-500)" },
    { label: "Active Subjects", value: "5", subtitle: "In progress", icon: BookOpen, color: "var(--sf-subject-math)" },
  ];

  const maxHours = Math.max(...weeklyProgress.map(d => d.hours), 5);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--sf-gray-900)' }}>
          Progress Tracking
        </h1>
        <p className="text-lg" style={{ color: 'var(--sf-gray-600)' }}>
          Monitor your study performance and achievements
        </p>
      </div>

      {/* Stats Grid */}
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
                  <div className="text-3xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <p className="text-sm" style={{ color: 'var(--sf-gray-500)' }}>
                    {stat.subtitle}
                  </p>
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

      {/* Weekly Chart */}
      <div className="p-6 rounded-2xl sf-card mb-8">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-6 h-6" style={{ color: 'var(--sf-blue-500)' }} />
          <h2 className="text-2xl font-bold" style={{ color: 'var(--sf-gray-900)' }}>
            Weekly Study Hours
          </h2>
        </div>
        <div className="flex items-end justify-between gap-4 h-64">
          {weeklyProgress.map((day, index) => {
            const heightPercentage = (day.hours / maxHours) * 100;
            const goalPercentage = (day.goal / maxHours) * 100;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full relative" style={{ height: '200px' }}>
                  {/* Goal Line */}
                  <div
                    className="absolute w-full border-t-2 border-dashed"
                    style={{
                      bottom: `${goalPercentage}%`,
                      borderColor: 'var(--sf-gray-300)'
                    }}
                  ></div>
                  {/* Bar */}
                  <div className="absolute bottom-0 w-full flex justify-center">
                    <div
                      className="w-full rounded-t-lg transition-all sf-gradient-blue"
                      style={{ height: `${heightPercentage}%` }}
                    ></div>
                  </div>
                  {/* Value */}
                  <div
                    className="absolute w-full text-center font-semibold text-sm"
                    style={{
                      bottom: `${heightPercentage + 5}%`,
                      color: 'var(--sf-blue-600)'
                    }}
                  >
                    {day.hours}h
                  </div>
                </div>
                <span className="font-medium" style={{ color: 'var(--sf-gray-700)' }}>
                  {day.day}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subject Progress */}
      <div className="p-6 rounded-2xl sf-card">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--sf-gray-900)' }}>
          Subject Progress
        </h2>
        <div className="space-y-6">
          {subjects.map((subject, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: subject.color }}
                  ></div>
                  <span className="font-semibold" style={{ color: 'var(--sf-gray-900)' }}>
                    {subject.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-bold" style={{ color: subject.color }}>
                    {subject.progress}%
                  </span>
                  <span className="text-sm ml-2" style={{ color: 'var(--sf-gray-500)' }}>
                    {subject.hours}h total
                  </span>
                </div>
              </div>
              <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: 'var(--sf-gray-200)' }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${subject.progress}%`,
                    background: subject.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
