import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { User, Mail, Bell, Moon, LogOut, Save } from "lucide-react";
import { useState } from "react";

export function Profile() {
  const [dailyGoal, setDailyGoal] = useState(4);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--sf-gray-900)' }}>
          Profile & Settings
        </h1>
        <p className="text-lg" style={{ color: 'var(--sf-gray-600)' }}>
          Manage your account and preferences
        </p>
      </div>

      {/* Profile Card */}
      <div className="p-8 rounded-2xl sf-card mb-6">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden sf-shadow-md">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1766459842752-e06f749c0b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHBsYW5uaW5nfGVufDF8fHx8MTc3MjM3MjQwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--sf-gray-900)' }}>
              Alex Johnson
            </h2>
            <p className="mb-4" style={{ color: 'var(--sf-gray-600)' }}>
              alex.johnson@university.edu
            </p>
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-lg font-medium text-white sf-gradient-blue hover:opacity-90">
                Edit Profile
              </button>
              <button className="px-4 py-2 rounded-lg font-medium border-2 transition-all hover:bg-gray-50" style={{
                borderColor: 'var(--sf-gray-300)',
                color: 'var(--sf-gray-700)',
                background: 'var(--sf-bg-card)'
              }}>
                Change Photo
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: 'var(--sf-gray-200)' }}>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1" style={{ color: 'var(--sf-blue-600)' }}>
              112h
            </div>
            <p className="text-sm" style={{ color: 'var(--sf-gray-600)' }}>Total Study Time</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1" style={{ color: 'var(--sf-mint-600)' }}>
              73%
            </div>
            <p className="text-sm" style={{ color: 'var(--sf-gray-600)' }}>Completion Rate</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold mb-1" style={{ color: 'var(--sf-subject-math)' }}>
              12
            </div>
            <p className="text-sm" style={{ color: 'var(--sf-gray-600)' }}>Day Streak</p>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {/* Study Goals */}
        <div className="p-6 rounded-2xl sf-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
              background: 'var(--sf-blue-50)',
              color: 'var(--sf-blue-600)'
            }}>
              <User className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--sf-gray-900)' }}>
              Study Goals
            </h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label style={{ color: 'var(--sf-gray-700)' }}>Daily Study Hours Goal</label>
                <span className="font-bold" style={{ color: 'var(--sf-blue-600)' }}>
                  {dailyGoal}h
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={dailyGoal}
                onChange={(e) => setDailyGoal(parseInt(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--sf-blue-500) 0%, var(--sf-blue-500) ${(dailyGoal / 12) * 100}%, var(--sf-gray-200) ${(dailyGoal / 12) * 100}%, var(--sf-gray-200) 100%)`
                }}
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="p-6 rounded-2xl sf-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
              background: 'var(--sf-mint-50)',
              color: 'var(--sf-mint-600)'
            }}>
              <Bell className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--sf-gray-900)' }}>
              Notifications
            </h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg" style={{ background: 'var(--sf-gray-50)' }}>
              <div>
                <p className="font-medium mb-1" style={{ color: 'var(--sf-gray-900)' }}>
                  Study Reminders
                </p>
                <p className="text-sm" style={{ color: 'var(--sf-gray-600)' }}>
                  Get notified about upcoming study sessions
                </p>
              </div>
              <label className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="sr-only peer"
                />
                <span className="absolute inset-0 rounded-full transition-all cursor-pointer peer-checked:bg-blue-500" style={{
                  background: notifications ? 'var(--sf-blue-500)' : 'var(--sf-gray-300)'
                }}>
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all" style={{
                    transform: notifications ? 'translateX(24px)' : 'translateX(0)'
                  }}></span>
                </span>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-lg" style={{ background: 'var(--sf-gray-50)' }}>
              <div>
                <p className="font-medium mb-1" style={{ color: 'var(--sf-gray-900)' }}>
                  Deadline Alerts
                </p>
                <p className="text-sm" style={{ color: 'var(--sf-gray-600)' }}>
                  Reminders for upcoming assignment deadlines
                </p>
              </div>
              <label className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only peer"
                />
                <span className="absolute inset-0 rounded-full transition-all cursor-pointer bg-blue-500">
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all" style={{
                    transform: 'translateX(24px)'
                  }}></span>
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="p-6 rounded-2xl sf-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{
              background: 'var(--sf-subject-math)15',
              color: 'var(--sf-subject-math)'
            }}>
              <Moon className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold" style={{ color: 'var(--sf-gray-900)' }}>
              Appearance
            </h3>
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-lg" style={{ background: 'var(--sf-gray-50)' }}>
            <div>
              <p className="font-medium mb-1" style={{ color: 'var(--sf-gray-900)' }}>
                Dark Mode
              </p>
              <p className="text-sm" style={{ color: 'var(--sf-gray-600)' }}>
                Switch to dark theme (Coming soon)
              </p>
            </div>
            <label className="relative inline-block w-12 h-6">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                className="sr-only peer"
                disabled
              />
              <span className="absolute inset-0 rounded-full transition-all cursor-not-allowed opacity-50" style={{
                background: 'var(--sf-gray-300)'
              }}>
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></span>
              </span>
            </label>
          </div>
        </div>

        {/* Account Actions */}
        <div className="p-6 rounded-2xl sf-card">
          <div className="flex gap-3">
            <button className="flex-1 py-3 rounded-xl font-medium text-white sf-gradient-blue hover:opacity-90 flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              Save Changes
            </button>
            <button className="px-6 py-3 rounded-xl font-medium border-2 transition-all hover:bg-red-50 flex items-center gap-2" style={{
              borderColor: 'var(--sf-error)',
              color: 'var(--sf-error)',
              background: 'var(--sf-bg-card)'
            }}>
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
