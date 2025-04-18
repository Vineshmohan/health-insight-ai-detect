
import { Button } from "@/components/ui/button";
import { Download, FileBarChart, Printer, Share2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { DiseaseRisk } from "@/types/health";

// Import the utility function to get risk level
const getRiskLevel = (risk: number) => {
  if (risk < 25) return { level: "Low", color: "text-green-600", bgColor: "bg-green-600" };
  if (risk < 50) return { level: "Moderate", color: "text-yellow-600", bgColor: "bg-yellow-600" };
  if (risk < 75) return { level: "High", color: "text-orange-600", bgColor: "bg-orange-600" };
  return { level: "Very High", color: "text-red-600", bgColor: "bg-red-600" };
};

interface ActionButtonsProps {
  results: DiseaseRisk[];
}

const ActionButtons = ({ results }: ActionButtonsProps) => {
  const navigate = useNavigate();
  
  const handlePrint = () => {
    const isLoggedIn = localStorage.getItem("user") !== null;
    
    if (!isLoggedIn) {
      toast.error("Please login to print your results");
      return;
    }
    
    window.print();
    toast.success("Printing report...");
  };
  
  const handleDownload = () => {
    const isLoggedIn = localStorage.getItem("user") !== null;
    
    if (!isLoggedIn) {
      toast.error("Please login to download your results");
      return;
    }
    
    const fileContent = results.map(disease => {
      const riskInfo = getRiskLevel(disease.risk);
      return `${disease.name}: ${riskInfo.level} Risk (${disease.risk}%)\n${disease.description}\n\nRecommendations:\n${disease.recommendations.join('\n')}\n\n`;
    }).join('---\n\n');
    
    const blob = new Blob([`ChronoDetect Health Assessment\n\n${fileContent}`], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ChronoDetect-Health-Report.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Report downloaded successfully");
  };
  
  const handleShare = () => {
    const isLoggedIn = localStorage.getItem("user") !== null;
    
    if (!isLoggedIn) {
      toast.error("Please login to share your results");
      return;
    }
    
    toast.success("Sharing options would appear here in a production app");
  };
  
  const handleDetailedReport = () => {
    const isLoggedIn = localStorage.getItem("user") !== null;
    
    if (!isLoggedIn) {
      toast.error("Please login to view detailed reports");
      return;
    }
    
    toast.success("Detailed report would be generated in a production app");
  };

  return (
    <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={handlePrint}
      >
        <Printer className="h-4 w-4" />
        <span>Print Results</span>
      </Button>
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={handleDownload}
      >
        <Download className="h-4 w-4" />
        <span>Download PDF</span>
      </Button>
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={handleShare}
      >
        <Share2 className="h-4 w-4" />
        <span>Share with Doctor</span>
      </Button>
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={handleDetailedReport}
      >
        <FileBarChart className="h-4 w-4" />
        <span>Detailed Report</span>
      </Button>
    </div>
  );
};

export default ActionButtons;
