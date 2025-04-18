
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import RiskSummary from "@/components/results/RiskSummary";
import RiskCard from "@/components/results/RiskCard";
import ActionButtons from "@/components/results/ActionButtons";
import { generateMockResults } from "@/utils/riskCalculation";
import type { ScreeningData, DiseaseRisk } from "@/types/health";

const Results = () => {
  const navigate = useNavigate();
  const [screeningData, setScreeningData] = useState<ScreeningData | null>(null);
  const [results, setResults] = useState<DiseaseRisk[]>([]);
  const [loading, setLoading] = useState(true);
  const reportRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const storedData = sessionStorage.getItem('screeningData');
    
    if (!storedData) {
      navigate("/screen");
      return;
    }
    
    try {
      const data = JSON.parse(storedData) as ScreeningData;
      setScreeningData(data);
      
      const mockResults = generateMockResults(data);
      setResults(mockResults);
      
      setLoading(false);
    } catch (err) {
      console.error("Error parsing screening data:", err);
      navigate("/screen");
    }
  }, [navigate]);
  
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
        <div className="max-w-4xl mx-auto" ref={reportRef}>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-3">Your Health Risk Assessment</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Based on the information you provided, our AI has generated the following risk assessment
              for common chronic conditions.
            </p>
          </div>
          
          <RiskSummary results={results} />
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Detailed Analysis</h2>
            {results.map((disease) => (
              <RiskCard key={disease.name} {...disease} />
            ))}
          </div>
          
          <ActionButtons results={results} />
          
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
