import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  MapPin, 
  Globe, 
  ArrowRight,
  CheckCircle
} from "lucide-react";

const LocationSelection = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const navigate = useNavigate();

  const locations = [
    {
      id: "india",
      title: "Study in India",
      description: "Explore colleges and universities across India",
      icon: MapPin,
      color: "bg-gradient-primary",
      features: [
        "Lower tuition fees",
        "Familiar culture and language",
        "Strong industry connections",
        "Government scholarships available"
      ]
    },
    {
      id: "abroad",
      title: "Study Abroad", 
      description: "Discover international education opportunities",
      icon: Globe,
      color: "bg-gradient-secondary",
      features: [
        "Global exposure and networking",
        "Advanced research facilities",
        "International career opportunities",
        "Cultural diversity"
      ]
    }
  ];

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
  };

  const handleContinue = () => {
    if (selectedLocation) {
      navigate(`/colleges?location=${selectedLocation}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Where Do You Want to Study?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred study location to see relevant college options and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12 animate-scale-in">
          {locations.map((location) => {
            const isSelected = selectedLocation === location.id;
            const Icon = location.icon;
            
            return (
              <Card 
                key={location.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-large hover:-translate-y-2 ${
                  isSelected 
                    ? "border-primary shadow-large ring-2 ring-primary/20 scale-105" 
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => handleLocationSelect(location.id)}
              >
                <CardHeader className="text-center relative">
                  <div className={`w-20 h-20 ${location.color} rounded-xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 ${isSelected ? 'scale-110' : ''}`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {isSelected && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                  )}
                  
                  <CardTitle className="text-2xl mb-2">{location.title}</CardTitle>
                  <p className="text-muted-foreground text-lg">{location.description}</p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    {location.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {selectedLocation && (
          <div className="text-center animate-slide-up">
            <div className="bg-muted/50 rounded-lg p-6 mb-6 max-w-xl mx-auto">
              <h3 className="text-lg font-semibold mb-2">Selected Location:</h3>
              <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-base">
                {locations.find(l => l.id === selectedLocation)?.title}
              </span>
            </div>
            
            <Button 
              onClick={handleContinue}
              size="lg"
              variant="gradient"
              className="min-w-48"
            >
              Find Colleges
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        )}

        {!selectedLocation && (
          <div className="text-center text-muted-foreground">
            <p>Select a location to continue your college search</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSelection;