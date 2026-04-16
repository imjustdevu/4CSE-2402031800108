import { Link } from "react-router";
import { Target, Calendar, TrendingUp, CheckSquare, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Landing() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Planning",
      description: "Create personalized study schedules that adapt to your goals",
    },
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Track assignments and never miss a deadline",
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Visualize your learning journey with detailed analytics",
    },
    {
      icon: Target,
      title: "Focus Mode",
      description: "Stay productive with built-in Pomodoro timer",
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--sf-bg-primary)' }}>
      {/* Navigation */}
      <nav className="px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center sf-gradient-blue">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-semibold" style={{ color: 'var(--sf-gray-900)' }}>StudyFlow</h1>
            <p className="text-xs" style={{ color: 'var(--sf-gray-500)' }}>Study Planner</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link 
            to="/login" 
            className="px-6 py-2 rounded-lg font-medium transition-all"
            style={{ color: 'var(--sf-blue-600)' }}
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="px-6 py-2 rounded-lg font-medium text-white transition-all sf-gradient-blue hover:opacity-90"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ 
                background: 'var(--sf-mint-50)',
                color: 'var(--sf-mint-700)'
              }}>
                Personalized E-Learning Pathways
              </div>
              <h1 className="text-5xl font-bold mb-6" style={{ color: 'var(--sf-gray-900)' }}>
                Master Your Studies with{" "}
                <span className="sf-text-gradient">Smart Planning</span>
              </h1>
              <p className="text-xl mb-8" style={{ color: 'var(--sf-gray-600)' }}>
                StudyFlow helps college students create personalized study schedules, 
                track progress, and stay focused. Study smarter, not harder.
              </p>
              <div className="flex items-center gap-4">
                <Link 
                  to="/signup" 
                  className="px-8 py-4 rounded-xl font-medium text-white transition-all sf-gradient-blue hover:opacity-90 flex items-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/login" 
                  className="px-8 py-4 rounded-xl font-medium transition-all border-2"
                  style={{ 
                    color: 'var(--sf-blue-600)',
                    borderColor: 'var(--sf-blue-200)',
                    background: 'var(--sf-bg-card)'
                  }}
                >
                  Login
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden sf-shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1738831651985-e242f111309d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzdHVkZW50JTIwc3R1ZHlpbmclMjBsaWJyYXJ5fGVufDF8fHx8MTc3MjM3Mjg1OHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Student studying"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 py-20" style={{ background: 'var(--sf-bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--sf-gray-900)' }}>
              Everything You Need to Excel
            </h2>
            <p className="text-xl" style={{ color: 'var(--sf-gray-600)' }}>
              Powerful features designed for modern students
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl sf-card sf-card-hover"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{
                    background: 'var(--sf-blue-50)',
                    color: 'var(--sf-blue-600)'
                  }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: 'var(--sf-gray-900)' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--sf-gray-600)' }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl sf-gradient-hero">
            <h2 className="text-4xl font-bold mb-4" style={{ color: 'var(--sf-gray-900)' }}>
              Ready to Transform Your Study Habits?
            </h2>
            <p className="text-xl mb-8" style={{ color: 'var(--sf-gray-600)' }}>
              Join thousands of students achieving their academic goals
            </p>
            <Link 
              to="/signup" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-white transition-all sf-gradient-blue hover:opacity-90"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}