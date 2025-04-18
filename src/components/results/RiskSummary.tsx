
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DiseaseRisk } from "@/types/health";

interface RiskSummaryProps {
  results: DiseaseRisk[];
}

const getRiskLevel = (risk: number) => {
  if (risk < 25) return { level: "Low", color: "text-green-600", bgColor: "bg-green-600" };
  if (risk < 50) return { level: "Moderate", color: "text-yellow-600", bgColor: "bg-yellow-600" };
  if (risk < 75) return { level: "High", color: "text-orange-600", bgColor: "bg-orange-600" };
  return { level: "Very High", color: "text-red-600", bgColor: "bg-red-600" };
};

const RiskSummary = ({ results }: RiskSummaryProps) => {
  return (
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
                    {getRiskLevel(disease.risk)}
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
  );
};

export default RiskSummary;
