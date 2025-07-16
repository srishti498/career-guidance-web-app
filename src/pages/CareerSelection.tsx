import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Code, 
  Stethoscope, 
  Calculator, 
  Paintbrush, 
  Building, 
  Gavel,
  Beaker,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const CareerSelection = () => {
  const [selectedCareers, setSelectedCareers] = useState<string[]>([]);
  const navigate = useNavigate();

  const careerFields = [
    {
      id: "engineering",
      title: "Engineering & Technology",
      description: "Computer Science, Mechanical, Electrical, Civil Engineering",
      icon: Code,
      color: "bg-blue-500"
    },
    {
      id: "medical",
      title: "Medical & Healthcare",
      description: "Medicine, Nursing, Pharmacy, Dental Sciences",
      icon: Stethoscope,
      color: "bg-red-500"
    },
    {
      id: "business",
      title: "Business & Management",
      description: "MBA, Commerce, Finance, Marketing",
      icon: Calculator,
      color: "bg-green-500"
    },
    {
      id: "arts",
      title: "Arts & Design",
      description: "Fine Arts, Graphic Design, Fashion Design",
      icon: Paintbrush,
      color: "bg-purple-500"
    },
    {
      id: "architecture",
      title: "Architecture & Planning",
      description: "Architecture, Urban Planning, Interior Design",
      icon: Building,
      color: "bg-orange-500"
    },
    {
      id: "law",
      title: "Law & Legal Studies",
      description: "Law, Legal Studies, Criminology",
      icon: Gavel,
      color: "bg-yellow-600"
    },
    {
      id: "science",
      title: "Science & Research",
      description: "Physics, Chemistry, Biology, Mathematics",
      icon: Beaker,
      color: "bg-teal-500"
    },
    {
      id: "social",
      title: "Social Sciences",
      description: "Psychology, Sociology, Political Science",
      icon: Users,
      color: "bg-indigo-500"
    }
  ];

  const toggleCareer = (careerId: string) => {
    setSelectedCareers(prev => 
      prev.includes(careerId) 
        ? prev.filter(id => id !== careerId)
        : [...prev, careerId]
    );
  };

  const handleContinue = () => {
    if (selectedCareers.length > 0) {
      navigate("/location-selection");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Choose Your Career Path
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the fields you're interested in. You can choose multiple areas to explore more options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 animate-scale-in">
          {careerFields.map((field) => {
            const isSelected = selectedCareers.includes(field.id);
            const Icon = field.icon;
            
            return (
              <Card 
                key={field.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-medium hover:-translate-y-1 ${
                  isSelected 
                    ? "border-primary shadow-medium ring-2 ring-primary/20" 
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => toggleCareer(field.id)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${field.color} rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-left flex-1">{field.title}</CardTitle>
                    {isSelected && (
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    )}
                  </div>
                  <CardDescription className="text-left">
                    {field.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {selectedCareers.length > 0 && (
          <div className="text-center animate-slide-up">
            <div className="bg-muted/50 rounded-lg p-6 mb-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-2">Selected Career Fields:</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {selectedCareers.map((careerId) => {
                  const field = careerFields.find(f => f.id === careerId);
                  return (
                    <span 
                      key={careerId}
                      className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {field?.title}
                    </span>
                  );
                })}
              </div>
            </div>
            
            <Button 
              onClick={handleContinue}
              size="lg"
              variant="gradient"
              className="min-w-48"
            >
              Continue to Location Selection
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}

        {selectedCareers.length === 0 && (
          <div className="text-center text-muted-foreground">
            <p>Select at least one career field to continue</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerSelection;