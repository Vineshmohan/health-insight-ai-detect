
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

interface RiskCardProps {
  name: string;
  risk: number;
  description: string;
  recommendations: string[];
}

const getRiskLevel = (risk: number) => {
  if (risk < 25) return { level: "Low", color: "text-green-600", bgColor: "bg-green-600" };
  if (risk < 50) return { level: "Moderate", color: "text-yellow-600", bgColor: "bg-yellow-600" };
  if (risk < 75) return { level: "High", color: "text-orange-600", bgColor: "bg-orange-600" };
  return { level: "Very High", color: "text-red-600", bgColor: "bg-red-600" };
};

const getRiskIcon = (risk: number) => {
  if (risk < 25) return <CheckCircle className="h-5 w-5 text-green-600" />;
  if (risk < 50) return <Info className="h-5 w-5 text-yellow-600" />;
  if (risk < 75) return <AlertTriangle className="h-5 w-5 text-orange-600" />;
  return <AlertTriangle className="h-5 w-5 text-red-600" />;
};

const RiskCard = ({ name, risk, description, recommendations }: RiskCardProps) => {
  const riskInfo = getRiskLevel(risk);
  
  return (
    <Card className="border-l-4" style={{ borderLeftColor: `var(--${riskInfo.color.replace('text-', '')})` }}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <span className={`font-semibold ${riskInfo.color}`}>
            {riskInfo.level} Risk ({risk}%)
          </span>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h4 className="font-semibold">Recommendations</h4>
          <ul className="space-y-2 pl-5 list-disc">
            {recommendations.map((rec, i) => (
              <li key={i} className="text-muted-foreground">{rec}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskCard;
