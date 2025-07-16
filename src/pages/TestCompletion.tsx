import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { 
  CheckCircle,
  Award,
  TrendingUp,
  BookOpen,
  ArrowRight,
  Download,
  Share
} from "lucide-react";

const TestCompletion = () => {
  // Mock results data
  const results = {
    overallScore: 85,
    verbal: { score: 88, percentile: 92 },
    quantitative: { score: 82, percentile: 87 },
    generalKnowledge: { score: 90, percentile: 95 },
    logicalReasoning: { score: 80, percentile: 83 },
    recommendations: [
      "Computer Science Engineering",
      "Data Science", 
      "Information Technology",
      "Software Engineering"
    ],
    suggestedColleges: [
      { name: "IIT Delhi", match: 95 },
      { name: "IIT Bombay", match: 92 },
      { name: "BITS Pilani", match: 88 }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Success Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Test Completed Successfully!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Great job! Here are your detailed results and personalized recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Overall Score */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-medium animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-6 h-6 mr-2 text-primary" />
                  Overall Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-primary mb-2">{results.overallScore}%</div>
                  <p className="text-muted-foreground">Overall Score</p>
                  <div className="mt-4 max-w-md mx-auto">
                    <Progress value={results.overallScore} className="h-3" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: "Verbal Reasoning", ...results.verbal },
                    { name: "Quantitative Reasoning", ...results.quantitative },
                    { name: "General Knowledge", ...results.generalKnowledge },
                    { name: "Logical Reasoning", ...results.logicalReasoning }
                  ].map((section, index) => (
                    <div key={index} className="bg-muted/30 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{section.name}</h4>
                        <span className="text-sm text-muted-foreground">
                          {section.percentile}th percentile
                        </span>
                      </div>
                      <div className="text-2xl font-bold text-primary mb-2">{section.score}%</div>
                      <Progress value={section.score} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Recommendations */}
            <Card className="border-0 shadow-medium animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-primary" />
                  Recommended Career Paths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {results.recommendations.map((career, index) => (
                    <div key={index} className="flex items-center p-4 bg-gradient-card rounded-lg border">
                      <BookOpen className="w-5 h-5 text-primary mr-3" />
                      <span className="font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Suggested Colleges */}
            <Card className="border-0 shadow-medium animate-slide-up">
              <CardHeader>
                <CardTitle>Best College Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {results.suggestedColleges.map((college, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold">{college.name}</h4>
                        <p className="text-sm text-muted-foreground">Recommended based on your profile</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-success">{college.match}%</div>
                        <div className="text-xs text-muted-foreground">Match</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Panel */}
          <div className="space-y-6">
            <Card className="border-0 shadow-medium animate-scale-in">
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full" variant="gradient">
                  <Link to="/colleges">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Explore Colleges
                  </Link>
                </Button>
                
                <Button asChild className="w-full" variant="outline">
                  <Link to="/careers">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Career Guidance
                  </Link>
                </Button>
                
                <Button className="w-full" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
                
                <Button className="w-full" variant="outline">
                  <Share className="w-4 h-4 mr-2" />
                  Share Results
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-medium bg-gradient-primary text-white">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Want to Improve?</h3>
                <p className="text-sm mb-4 text-white/90">
                  Take additional practice tests to enhance your scores
                </p>
                <Button variant="secondary" size="sm">
                  Practice More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestCompletion;