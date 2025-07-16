import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { 
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

const AptitudeTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(3600); // 60 minutes
  const navigate = useNavigate();

  // Sample questions
  const questions = [
    {
      id: 1,
      section: "Verbal Reasoning",
      question: "Choose the word that best completes the sentence: The scientist's _______ approach to research led to groundbreaking discoveries.",
      options: [
        "methodical",
        "random", 
        "hasty",
        "superficial"
      ],
      correctAnswer: "methodical"
    },
    {
      id: 2,
      section: "Quantitative Reasoning",
      question: "If a train travels 120 km in 2 hours, what is its average speed in km/h?",
      options: [
        "40 km/h",
        "60 km/h",
        "80 km/h", 
        "100 km/h"
      ],
      correctAnswer: "60 km/h"
    },
    {
      id: 3,
      section: "General Knowledge",
      question: "Which planet is known as the 'Red Planet'?",
      options: [
        "Venus",
        "Mars",
        "Jupiter",
        "Saturn"
      ],
      correctAnswer: "Mars"
    },
    {
      id: 4,
      section: "Logical Reasoning",
      question: "In a sequence: 2, 6, 18, 54, ?, what is the next number?",
      options: [
        "108",
        "162",
        "216",
        "324"
      ],
      correctAnswer: "162"
    },
    {
      id: 5,
      section: "Verbal Reasoning",
      question: "Which word is the antonym of 'abundant'?",
      options: [
        "plentiful",
        "scarce",
        "numerous",
        "ample"
      ],
      correctAnswer: "scarce"
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Complete test
      navigate("/test-completion");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Aptitude Test</h1>
              <p className="text-muted-foreground">
                Section: {currentQ?.section} | Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-orange-600">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
              </div>
              
              <div className="text-right">
                <div className="text-sm text-muted-foreground">Progress</div>
                <div className="font-semibold">{Math.round(progress)}%</div>
              </div>
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="border-0 shadow-medium animate-scale-in">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {currentQuestion + 1}
                </div>
                <div>
                  <CardTitle className="text-xl">{currentQ?.section}</CardTitle>
                  <CardDescription>Choose the best answer</CardDescription>
                </div>
              </div>
              
              {answers[currentQuestion] && (
                <CheckCircle className="w-6 h-6 text-success" />
              )}
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-6 leading-relaxed">
                {currentQ?.question}
              </h3>
              
              <RadioGroup 
                value={answers[currentQuestion] || ""} 
                onValueChange={handleAnswerChange}
                className="space-y-4"
              >
                {currentQ?.options.map((option, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="flex-1 cursor-pointer text-base"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            
            <div className="flex justify-between items-center">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              
              <div className="flex space-x-2">
                {questions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentQuestion
                        ? "bg-primary"
                        : answers[index]
                        ? "bg-success"
                        : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
                variant="gradient"
              >
                {currentQuestion === questions.length - 1 ? "Complete Test" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mt-8 border-orange-200 bg-orange-50 animate-slide-up">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
              <div className="text-sm text-orange-800">
                <p className="font-medium mb-1">Test Instructions:</p>
                <ul className="space-y-1 text-xs">
                  <li>• You have 60 minutes to complete all questions</li>
                  <li>• You can navigate between questions using Previous/Next buttons</li>
                  <li>• All questions are mandatory</li>
                  <li>• Your progress is automatically saved</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AptitudeTest;