import { Link, useNavigate } from "react-router";
import { Target, Mail, Lock, User } from "lucide-react";
import { useState } from "react";

export function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock signup - redirect to onboarding
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--sf-bg-primary)' }}>
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 justify-center mb-8">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center sf-gradient-blue">
            <Target className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="font-semibold text-xl" style={{ color: 'var(--sf-gray-900)' }}>StudyFlow</h1>
            <p className="text-sm" style={{ color: 'var(--sf-gray-500)' }}>Study Planner</p>
          </div>
        </Link>

        {/* Sign Up Card */}
        <div className="p-8 rounded-2xl sf-card">
          <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--sf-gray-900)' }}>
            Create Account
          </h2>
          <p className="mb-8" style={{ color: 'var(--sf-gray-600)' }}>
            Start your journey to better studying
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block mb-2" style={{ color: 'var(--sf-gray-700)' }}>
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--sf-gray-400)' }} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 outline-none transition-all"
                  style={{ 
                    borderColor: 'var(--sf-gray-200)',
                    background: 'var(--sf-bg-card)'
                  }}
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block mb-2" style={{ color: 'var(--sf-gray-700)' }}>
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--sf-gray-400)' }} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 outline-none transition-all"
                  style={{ 
                    borderColor: 'var(--sf-gray-200)',
                    background: 'var(--sf-bg-card)'
                  }}
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block mb-2" style={{ color: 'var(--sf-gray-700)' }}>
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: 'var(--sf-gray-400)' }} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 outline-none transition-all"
                  style={{ 
                    borderColor: 'var(--sf-gray-200)',
                    background: 'var(--sf-bg-card)'
                  }}
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-medium text-white transition-all sf-gradient-blue hover:opacity-90"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center mt-6" style={{ color: 'var(--sf-gray-600)' }}>
            Already have an account?{" "}
            <Link to="/login" className="font-medium hover:underline" style={{ color: 'var(--sf-blue-600)' }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
