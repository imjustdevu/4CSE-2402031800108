import { useNavigate } from "react-router";
import { useState } from "react";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

export function Onboarding() {
  const navigate = useNavigate();
  const [studyHours, setStudyHours] = useState("4");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const subjects = [
    { name: "Mathematics", color: "var(--sf-subject-math)" },
    { name: "Computer Science", color: "var(--sf-subject-cs)" },
    { name: "English Literature", color: "var(--sf-subject-english)" },
    { name: "History", color: "var(--sf-subject-history)" },
    { name: "Biology", color: "var(--sf-subject-science)" },
    { name: "Art & Design", color: "var(--sf-subject-art)" },
  ];

  const toggleSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const handleComplete = () => {
    navigate("/app");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--sf-bg-primary)' }}>
      <div className="w-full max-w-2xl">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-24 h-2 rounded-full sf-gradient-blue"></div>
          <div className="w-24 h-2 rounded-full" style={{ background: 'var(--sf-gray-200)' }}></div>
          <div className="w-24 h-2 rounded-full" style={{ background: 'var(--sf-gray-200)' }}></div>
        </div>

        {/* Onboarding Card */}
        <div className="p-8 md:p-12 rounded-2xl sf-card">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'var(--sf-blue-50)' }}>
              <BookOpen className="w-6 h-6" style={{ color: 'var(--sf-blue-600)' }} />
            </div>
            <div>
              <h2 className="text-3xl font-bold" style={{ color: 'var(--sf-gray-900)' }}>
                Let's Get Started
              </h2>
              <p style={{ color: 'var(--sf-gray-600)' }}>
                Tell us about your study goals
              </p>
            </div>
          </div>

          {/* Select Subjects */}
          <div className="mb-8">
            <h3 className="font-semibold mb-4" style={{ color: 'var(--sf-gray-900)' }}>
              What subjects are you studying?
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {subjects.map((subject) => {
                const isSelected = selectedSubjects.includes(subject.name);
                return (
                  <button
                    key={subject.name}
                    onClick={() => toggleSubject(subject.name)}
                    className="p-4 rounded-xl border-2 text-left transition-all"
                    style={{
                      borderColor: isSelected ? subject.color : 'var(--sf-gray-200)',
                      background: isSelected ? `${subject.color}10` : 'var(--sf-bg-card)',
                      color: 'var(--sf-gray-900)'
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ background: subject.color }}
                      ></div>
                      {subject.name}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Daily Study Hours */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5" style={{ color: 'var(--sf-blue-600)' }} />
              <h3 className="font-semibold" style={{ color: 'var(--sf-gray-900)' }}>
                Daily Study Goal
              </h3>
            </div>
            <div className="p-6 rounded-xl" style={{ background: 'var(--sf-blue-50)' }}>
              <div className="flex items-center justify-between mb-3">
                <span style={{ color: 'var(--sf-gray-700)' }}>Hours per day</span>
                <span className="text-2xl font-bold" style={{ color: 'var(--sf-blue-600)' }}>
                  {studyHours}h
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="12"
                value={studyHours}
                onChange={(e) => setStudyHours(e.target.value)}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--sf-blue-500) 0%, var(--sf-blue-500) ${(parseInt(studyHours) / 12) * 100}%, var(--sf-gray-200) ${(parseInt(studyHours) / 12) * 100}%, var(--sf-gray-200) 100%)`
                }}
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleComplete}
            disabled={selectedSubjects.length === 0}
            className="w-full py-3 rounded-xl font-medium text-white transition-all sf-gradient-blue hover:opacity-90 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Dashboard
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
