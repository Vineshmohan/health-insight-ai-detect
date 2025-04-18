
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Download, FileBarChart, Printer, Share2, AlertTriangle, CheckCircle, Info } from "lucide-react";

// Define interfaces for the screening data and results
interface ScreeningData {
  age: number;
  gender: string;
  glucose: number;
  bloodPressure: number;
  skinThickness: number;
  insulin: number;
  bmi: number;
  diabetesPedigree: number;
  smoker: boolean;
  familyHistory: boolean;
}

interface DiseaseRisk {
  name: string;
  risk: number;
  description: string;
  recommendations: string[];
}

const Results = () => {
  const navigate = useNavigate();
  const [screeningData, setScreeningData] = useState<ScreeningData | null>(null);
  const [results, setResults] = useState<DiseaseRisk[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Retrieve screening data from session storage
    const storedData = sessionStorage.getItem('screeningData');
    
    if (!storedData) {
      // If no data is found, navigate back to the screening page
      navigate("/screen");
      return;
    }
    
    try {
      const data = JSON.parse(storedData) as ScreeningData;
      setScreeningData(data);
      
      // Generate mock results based on the input data
      // In a real application, this would come from the Flask API
      generateMockResults(data);
      
      setLoading(false);
    } catch (err) {
      console.error("Error parsing screening data:", err);
      navigate("/screen");
    }
  }, [navigate]);
  
  // Mock function to generate results based on input
  const generateMockResults = (data: ScreeningData) => {
    // Calculate diabetes risk - higher if glucose, BMI, family history are elevated
    const diabetesRisk = calculateRisk([
      { value: data.glucose, threshold: 120, weight: 0.35 },
      { value: data.insulin, threshold: 100, weight: 0.15 },
      { value: data.bmi, threshold: 30, weight: 0.2 },
      { value: data.age, threshold: 50, weight: 0.1 },
      { value: data.diabetesPedigree, threshold: 1.0, weight: 0.2 },
      { value: data.familyHistory ? 1 : 0, threshold: 0.5, weight: 0.2 }
    ]);
    
    // Calculate heart disease risk - higher if blood pressure, smoker, age are elevated
    const heartRisk = calculateRisk([
      { value: data.bloodPressure, threshold: 140, weight: 0.3 },
      { value: data.bmi, threshold: 30, weight: 0.15 },
      { value: data.age, threshold: 55, weight: 0.2 },
      { value: data.smoker ? 1 : 0, threshold: 0.5, weight: 0.25 },
      { value: data.familyHistory ? 1 : 0, threshold: 0.5, weight: 0.1 }
    ]);
    
    // Calculate obesity risk based primarily on BMI
    const obesityRisk = calculateRisk([
      { value: data.bmi, threshold: 30, weight: 0.6 },
      { value: data.skinThickness, threshold: 35, weight: 0.2 },
      { value: data.age, threshold: 40, weight: 0.05 },
      { value: data.smoker ? 0 : 1, threshold: 0.5, weight: 0.05 }, // Non-smokers might have higher obesity risk
      { value: data.gender === "female" ? 1 : 0, threshold: 0.5, weight: 0.1 }
    ]);
    
    setResults([
      {
        name: "Type 2 Diabetes",
        risk: diabetesRisk,
        description: "Type 2 diabetes affects how your body uses sugar (glucose) for energy and can cause serious health complications if left untreated.",
        recommendations: [
          "Monitor blood glucose levels regularly",
          "Reduce intake of refined carbohydrates and sugars",
          "Engage in regular physical activity",
          "Maintain a healthy weight through balanced nutrition",
          "Consider consulting with an endocrinologist for personalized advice"
        ]
      },
      {
        name: "Heart Disease",
        risk: heartRisk,
        description: "Heart disease includes conditions affecting the heart's rhythm, muscle, and blood vessels, which can lead to heart attacks and stroke.",
        recommendations: [
          "Maintain blood pressure within healthy ranges",
          "Quit smoking and avoid second-hand smoke",
          "Reduce saturated fat intake and increase omega-3 fatty acids",
          "Engage in cardiovascular exercise regularly",
          "Consider consulting with a cardiologist for further evaluation"
        ]
      },
      {
        name: "Obesity",
        risk: obesityRisk,
        description: "Obesity is a complex disease involving an excessive amount of body fat that increases the risk of other health problems.",
        recommendations: [
          "Focus on portion control and balanced nutrition",
          "Gradually increase physical activity levels",
          "Set realistic weight management goals",
          "Consider working with a nutritionist or dietitian",
          "Develop sustainable lifestyle changes rather than short-term diets"
        ]
      }
    ]);
  };
  
  // Helper function to calculate risk based on weighted factors
  const calculateRisk = (factors: { value: number, threshold: number, weight: number }[]) => {
    let riskScore = 0;
    
    factors.forEach(factor => {
      // Calculate how much the value exceeds the threshold (normalized to 0-1)
      const factorRisk = Math.min(Math.max(factor.value / factor.threshold - 0.5, 0) * 2, 1);
      riskScore += factorRisk * factor.weight;
    });
    
    // Normalize to percentage and add some randomness for demo purposes
    return Math.min(Math.max(Math.round(riskScore * 100) + Math.random() * 10 - 5, 5), 95);
  };
  
  // Function to determine risk level classification
  const getRiskLevel = (risk: number) => {
    if (risk < 25) return { level: "Low", color: "text-green-600", bgColor: "bg-green-600" };
    if (risk < 50) return { level: "Moderate", color: "text-yellow-600", bgColor: "bg-yellow-600" };
    if (risk < 75) return { level: "High", color: "text-orange-600", bgColor: "bg-orange-600" };
    return { level: "Very High", color: "text-red-600", bgColor: "bg-red-600" };
  };
  
  // Function to get the right icon for risk level
  const getRiskIcon = (risk: number) => {
    if (risk < 25) return <CheckCircle className="h-5 w-5 text-green-600" />;
    if (risk < 50) return <Info className="h-5 w-5 text-yellow-600" />;
    if (risk < 75) return <AlertTriangle className="h-5 w-5 text-orange-600" />;
    return <AlertTriangle className="h-5 w-5 text-red-600" />;
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent mb-4"></div>
            <p className="text-lg">Analyzing your health data...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-3">Your Health Risk Assessment</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Based on the information you provided, our AI has generated the following risk assessment
              for common chronic conditions.
            </p>
          </div>
          
          {/* Summary Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
              <CardDescription>
                Overview of your chronic disease risk factors based on the health data you provided.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {results.map((disease) => {
                  const riskInfo = getRiskLevel(disease.risk);
                  
                  return (
                    <div key={disease.name} className="space-y-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          {getRiskIcon(disease.risk)}
                          <span className="font-medium">{disease.name}</span>
                        </div>
                        <span className={`font-semibold ${riskInfo.color}`}>
                          {riskInfo.level} Risk ({disease.risk}%)
                        </span>
                      </div>
                      <Progress 
                        value={disease.risk} 
                        className="h-2 bg-secondary/50"
                        indicatorColor={riskInfo.bgColor.startsWith('bg-') ? `var(--${riskInfo.bgColor.replace('bg-', '')})` : undefined}
                      />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          
          {/* Detailed Results */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Detailed Analysis</h2>
            
            {results.map((disease) => {
              const riskInfo = getRiskLevel(disease.risk);
              
              return (
                <Card key={disease.name} className="border-l-4" style={{ borderLeftColor: `var(--${riskInfo.color.replace('text-', '')})` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{disease.name}</CardTitle>
                      <span className={`font-semibold ${riskInfo.color}`}>
                        {riskInfo.level} Risk ({disease.risk}%)
                      </span>
                    </div>
                    <CardDescription>{disease.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Recommendations</h4>
                      <ul className="space-y-2 pl-5 list-disc">
                        {disease.recommendations.map((rec, i) => (
                          <li key={i} className="text-muted-foreground">{rec}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Actions */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Button variant="outline" className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              <span>Print Results</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              <span>Share with Doctor</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <FileBarChart className="h-4 w-4" />
              <span>Detailed Report</span>
            </Button>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-10 bg-muted p-4 rounded-lg text-sm">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold mb-1">Medical Disclaimer</h4>
                <p className="text-muted-foreground">
                  This assessment is based on the limited information provided and is intended for informational purposes only.
                  It is not a medical diagnosis or a substitute for professional medical advice, diagnosis, or treatment.
                  Always seek the advice of your physician or other qualified health provider with any questions you may have
                  regarding a medical condition.
                </p>
              </div>
            </div>
          </div>
          
          {/* Return button */}
          <div className="mt-8 text-center">
            <Button onClick={() => navigate("/screen")} className="bg-primary hover:bg-primary/90">
              Take Assessment Again
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
