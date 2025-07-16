import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap,
  Menu,
  X,
  User,
  Building,
  UserCheck
} from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: null },
    { name: "Find Colleges", path: "/colleges", icon: null },
    { name: "Career Guide", path: "/careers", icon: null },
    { name: "Aptitude Test", path: "/aptitude-test", icon: null },
    { name: "About", path: "/about", icon: null },
  ];

  const authItems = [
    { name: "Student Login", path: "/login", icon: User, variant: "outline" as const },
    { name: "College Login", path: "/college-login", icon: Building, variant: "outline" as const },
    { name: "Sign Up", path: "/signup", icon: UserCheck, variant: "gradient" as const },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-border z-50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">CareerGuide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              {authItems.map((item) => (
                <Button
                  key={item.name}
                  asChild
                  variant={item.variant}
                  size="sm"
                  className="transition-all duration-300"
                >
                  <Link to={item.path}>
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border animate-slide-up">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border space-y-3">
                {authItems.map((item) => (
                  <Button
                    key={item.name}
                    asChild
                    variant={item.variant}
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to={item.path}>
                      <item.icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;