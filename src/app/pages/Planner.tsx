import { Plus } from "lucide-react";
import { useState } from "react";

export function Planner() {
  const [selectedDay, setSelectedDay] = useState("Monday");
  
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "12:00", 
    "13:00", "14:00", "15:00", "16:00", "17:00", 
    "18:00", "19:00", "20:00"
  ];

  const sessions = {
    Monday: [
      { time: "09:00", duration: 2, subject: "Mathematics", title: "Calculus Study", color: "var(--sf-subject-math)" },
      { time: "14:00", duration: 1.5, subject: "Computer Science", title: "Python Programming", color: "var(--sf-subject-cs)" },
    ],
    Tuesday: [
      { time: "10:00", duration: 1, subject: "English", title: "Literature Review", color: "var(--sf-subject-english)" },
      { time: "15:00", duration: 2, subject: "Biology", title: "Cell Biology", color: "var(--sf-subject-science)" },
    ],
    Wednesday: [
      { time: "09:00", duration: 1.5, subject: "History", title: "World War II", color: "var(--sf-subject-history)" },
      { time: "13:00", duration: 1, subject: "Mathematics", title: "Linear Algebra", color: "var(--sf-subject-math)" },
    ],
    Thursday: [
      { time: "11:00", duration: 2, subject: "Computer Science", title: "Data Structures", color: "var(--sf-subject-cs)" },
    ],
    Friday: [
      { time: "09:00", duration: 1, subject: "Art", title: "Design Principles", color: "var(--sf-subject-art)" },
      { time: "14:00", duration: 1.5, subject: "Biology", title: "Lab Review", color: "var(--sf-subject-science)" },
    ],
    Saturday: [],
    Sunday: [],
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--sf-gray-900)' }}>
            Study Planner
          </h1>
          <p className="text-lg" style={{ color: 'var(--sf-gray-600)' }}>
            Manage your weekly study schedule
          </p>
        </div>
        <button className="px-6 py-3 rounded-xl font-medium text-white sf-gradient-blue hover:opacity-90 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Session
        </button>
      </div>

      {/* Day Selector */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className="px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all"
            style={{
              background: selectedDay === day ? 'var(--sf-blue-500)' : 'var(--sf-bg-card)',
              color: selectedDay === day ? 'white' : 'var(--sf-gray-700)',
              boxShadow: selectedDay === day ? 'var(--sf-shadow-md)' : 'var(--sf-shadow-sm)',
            }}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Weekly View */}
      <div className="rounded-2xl sf-card p-6">
        <div className="grid grid-cols-8 gap-4">
          {/* Time Column */}
          <div className="space-y-20">
            <div className="h-12"></div>
            {timeSlots.map((time) => (
              <div key={time} className="text-sm font-medium" style={{ color: 'var(--sf-gray-500)' }}>
                {time}
              </div>
            ))}
          </div>

          {/* Days Columns */}
          {days.map((day) => (
            <div key={day} className="relative">
              <div className="h-12 flex items-center justify-center mb-4">
                <span className="font-semibold" style={{ 
                  color: selectedDay === day ? 'var(--sf-blue-600)' : 'var(--sf-gray-700)' 
                }}>
                  {day.slice(0, 3)}
                </span>
              </div>
              
              {/* Time Grid */}
              <div className="relative" style={{ height: `${timeSlots.length * 80}px` }}>
                {timeSlots.map((_, index) => (
                  <div
                    key={index}
                    className="absolute w-full border-t"
                    style={{ 
                      top: `${index * 80}px`,
                      borderColor: 'var(--sf-gray-200)',
                      height: '80px'
                    }}
                  ></div>
                ))}
                
                {/* Study Sessions */}
                {sessions[day as keyof typeof sessions]?.map((session, index) => {
                  const startHour = parseInt(session.time.split(':')[0]);
                  const topPosition = (startHour - 8) * 80;
                  const height = session.duration * 80;
                  
                  return (
                    <div
                      key={index}
                      className="absolute w-full px-1 cursor-pointer hover:opacity-80 transition-opacity"
                      style={{ 
                        top: `${topPosition}px`,
                        height: `${height}px`,
                      }}
                    >
                      <div 
                        className="h-full p-2 rounded-lg"
                        style={{ 
                          background: session.color,
                          opacity: 0.9
                        }}
                      >
                        <p className="text-xs font-semibold text-white mb-1">
                          {session.time}
                        </p>
                        <p className="text-sm font-medium text-white line-clamp-2">
                          {session.title}
                        </p>
                        <p className="text-xs text-white opacity-90 mt-1">
                          {session.duration}h
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
