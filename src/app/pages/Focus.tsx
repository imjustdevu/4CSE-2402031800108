import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Settings } from "lucide-react";

export function Focus() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState<"focus" | "short" | "long">("focus");

  const modes = {
    focus: { duration: 25, label: "Focus", color: "var(--sf-blue-500)" },
    short: { duration: 5, label: "Short Break", color: "var(--sf-mint-500)" },
    long: { duration: 15, label: "Long Break", color: "var(--sf-subject-math)" },
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false);
            // Timer complete
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(modes[mode].duration);
    setSeconds(0);
  };

  const changeMode = (newMode: "focus" | "short" | "long") => {
    setMode(newMode);
    setMinutes(modes[newMode].duration);
    setSeconds(0);
    setIsActive(false);
  };

  const totalSeconds = modes[mode].duration * 60;
  const currentSeconds = minutes * 60 + seconds;
  const progress = ((totalSeconds - currentSeconds) / totalSeconds) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--sf-gray-900)' }}>
          Focus Mode
        </h1>
        <p className="text-lg" style={{ color: 'var(--sf-gray-600)' }}>
          Stay productive with the Pomodoro technique
        </p>
      </div>

      {/* Mode Selector */}
      <div className="flex justify-center gap-3 mb-12">
        {(Object.keys(modes) as Array<keyof typeof modes>).map((key) => (
          <button
            key={key}
            onClick={() => changeMode(key)}
            className="px-6 py-3 rounded-xl font-medium transition-all"
            style={{
              background: mode === key ? modes[key].color : 'var(--sf-bg-card)',
              color: mode === key ? 'white' : 'var(--sf-gray-700)',
              boxShadow: mode === key ? 'var(--sf-shadow-md)' : 'var(--sf-shadow-sm)',
            }}
          >
            {modes[key].label}
          </button>
        ))}
      </div>

      {/* Timer Display */}
      <div className="flex justify-center mb-12">
        <div className="relative w-96 h-96">
          {/* Progress Circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="192"
              cy="192"
              r="180"
              stroke="var(--sf-gray-200)"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="192"
              cy="192"
              r="180"
              stroke={modes[mode].color}
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 180}`}
              strokeDashoffset={`${2 * Math.PI * 180 * (1 - progress / 100)}`}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s linear' }}
            />
          </svg>

          {/* Timer Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl font-bold mb-4" style={{ color: modes[mode].color }}>
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
              </div>
              <p className="text-xl" style={{ color: 'var(--sf-gray-600)' }}>
                {modes[mode].label}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={toggleTimer}
          className="w-20 h-20 rounded-full flex items-center justify-center text-white transition-all hover:opacity-90"
          style={{ background: modes[mode].color, boxShadow: 'var(--sf-shadow-lg)' }}
        >
          {isActive ? (
            <Pause className="w-8 h-8" />
          ) : (
            <Play className="w-8 h-8 ml-1" />
          )}
        </button>
        <button
          onClick={resetTimer}
          className="w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all hover:bg-gray-50"
          style={{ 
            borderColor: 'var(--sf-gray-300)',
            color: 'var(--sf-gray-700)',
            background: 'var(--sf-bg-card)'
          }}
        >
          <RotateCcw className="w-6 h-6" />
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl sf-card text-center">
          <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{
            background: 'var(--sf-blue-50)',
            color: 'var(--sf-blue-600)'
          }}>
            <Play className="w-6 h-6" />
          </div>
          <div className="text-3xl font-bold mb-1" style={{ color: 'var(--sf-blue-600)' }}>
            8
          </div>
          <p style={{ color: 'var(--sf-gray-600)' }}>Sessions Today</p>
        </div>

        <div className="p-6 rounded-2xl sf-card text-center">
          <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{
            background: 'var(--sf-mint-50)',
            color: 'var(--sf-mint-600)'
          }}>
            <Settings className="w-6 h-6" />
          </div>
          <div className="text-3xl font-bold mb-1" style={{ color: 'var(--sf-mint-600)' }}>
            3.5h
          </div>
          <p style={{ color: 'var(--sf-gray-600)' }}>Focus Time</p>
        </div>

        <div className="p-6 rounded-2xl sf-card text-center">
          <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{
            background: 'var(--sf-subject-math)15',
            color: 'var(--sf-subject-math)'
          }}>
            <RotateCcw className="w-6 h-6" />
          </div>
          <div className="text-3xl font-bold mb-1" style={{ color: 'var(--sf-subject-math)' }}>
            12
          </div>
          <p style={{ color: 'var(--sf-gray-600)' }}>Day Streak</p>
        </div>
      </div>
    </div>
  );
}
