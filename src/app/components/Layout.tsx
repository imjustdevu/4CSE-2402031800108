import { Outlet, Link, useLocation } from "react-router";
import { Home, Calendar, CheckSquare, TrendingUp, Target, User } from "lucide-react";

export function Layout() {
  const location = useLocation();
  
  const navItems = [
    { path: "/app", label: "Dashboard", icon: Home },
    { path: "/app/planner", label: "Planner", icon: Calendar },
    { path: "/app/tasks", label: "Tasks", icon: CheckSquare },
    { path: "/app/progress", label: "Progress", icon: TrendingUp },
    { path: "/app/focus", label: "Focus", icon: Target },
    { path: "/app/profile", label: "Profile", icon: User },
  ];
  
  const isActive = (path: string) => {
    if (path === "/app") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };
  
  return (
    <div className="min-h-screen" style={{ background: 'var(--sf-bg-primary)' }}>
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-screen w-64 border-r p-6" style={{ 
        background: 'var(--sf-bg-card)',
        borderColor: 'var(--sf-gray-200)'
      }}>
        <Link to="/app" className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center sf-gradient-blue">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-semibold" style={{ color: 'var(--sf-gray-900)' }}>StudyFlow</h1>
            <p className="text-xs" style={{ color: 'var(--sf-gray-500)' }}>Study Planner</p>
          </div>
        </Link>
        
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all"
                style={{
                  background: active ? 'var(--sf-blue-50)' : 'transparent',
                  color: active ? 'var(--sf-blue-600)' : 'var(--sf-gray-600)',
                }}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
