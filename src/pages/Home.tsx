import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  MapPin, 
  Search, 
  Users, 
  Award, 
  BookOpen,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Future Starts with the
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Right College Choice
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the perfect college for your career aspirations. Get personalized guidance, 
              take aptitude tests, and make informed decisions about your educational journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="xl" variant="secondary">
                <Link to="/careers">Get Started Free</Link>
              </Button>
              <Button asChild size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need for College Selection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform provides all the tools and information you need to make the best educational decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Smart College Search</CardTitle>
                <CardDescription>
                  Find colleges based on your preferences, budget, location, and career goals with our intelligent search system.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Aptitude Testing</CardTitle>
                <CardDescription>
                  Take comprehensive aptitude tests to assess your strengths and get personalized career recommendations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Global Opportunities</CardTitle>
                <CardDescription>
                  Explore colleges and universities both in India and abroad with detailed information and requirements.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Expert Guidance</CardTitle>
                <CardDescription>
                  Get personalized counseling and guidance from education experts to make informed decisions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Scholarship Info</CardTitle>
                <CardDescription>
                  Discover scholarship opportunities and financial aid options to fund your education dreams.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">Career Matching</CardTitle>
                <CardDescription>
                  Match your interests and skills with the right courses and career paths for your future success.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple steps to find your perfect college match
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 animate-scale-in">
            {[
              {
                step: "01",
                title: "Create Account",
                description: "Sign up and complete your profile with academic details and preferences."
              },
              {
                step: "02", 
                title: "Take Aptitude Test",
                description: "Complete our comprehensive aptitude assessment to understand your strengths."
              },
              {
                step: "03",
                title: "Get Recommendations", 
                description: "Receive personalized college and course recommendations based on your profile."
              },
              {
                step: "04",
                title: "Apply & Succeed",
                description: "Apply to your chosen colleges and start your journey to success."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Find Your Perfect College?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have found their ideal college and career path with our platform.
            </p>
            <Button asChild size="xl" variant="secondary">
              <Link to="/signup">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-8 h-8 mr-2" />
              <span className="text-2xl font-bold">CareerGuide</span>
            </div>
            <p className="text-white/70 mb-6">
              Empowering students to make informed educational decisions for a brighter future.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/about" className="text-white/70 hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link>
              <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="text-white/70 hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;