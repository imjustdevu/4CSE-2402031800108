import { Link, useNavigate } from "react-router";
import { Target, Mail, Lock } from "lucide-react";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - redirect to dashboard
    navigate("/app");
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

        {/* Login Card */}
        <div className="p-8 rounded-2xl sf-card">
          <h2 className="text-3xl font-bold mb-2" style={{ color: 'var(--sf-gray-900)' }}>
            Welcome Back
          </h2>
          <p className="mb-8" style={{ color: 'var(--sf-gray-600)' }}>
            Login to continue your learning journey
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border-2 outline-none transition-all"
                  style={{ 
                    borderColor: 'var(--sf-gray-200)',
                    background: 'var(--sf-bg-card)'
                  }}
                  required
                />
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded accent-blue-600"
                />
                <span style={{ color: 'var(--sf-gray-700)' }}>Remember me</span>
              </label>
              <a href="#" className="hover:underline" style={{ color: 'var(--sf-blue-600)' }}>
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-medium text-white transition-all sf-gradient-blue hover:opacity-90"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-center mt-6" style={{ color: 'var(--sf-gray-600)' }}>
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium hover:underline" style={{ color: 'var(--sf-blue-600)' }}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
