
import { ScreeningData, DiseaseRisk } from "@/types/health";

interface RiskFactor {
  value: number;
  threshold: number;
  weight: number;
}

export const calculateRisk = (factors: RiskFactor[]) => {
  let riskScore = 0;
  
  factors.forEach(factor => {
    const factorRisk = Math.min(Math.max(factor.value / factor.threshold - 0.5, 0) * 2, 1);
    riskScore += factorRisk * factor.weight;
  });
  
  return Math.min(Math.max(Math.round(riskScore * 100) + Math.random() * 10 - 5, 5), 95);
};

export const generateMockResults = (data: ScreeningData): DiseaseRisk[] => {
  const diabetesRisk = calculateRisk([
    { value: data.glucose, threshold: 120, weight: 0.35 },
    { value: data.insulin, threshold: 100, weight: 0.15 },
    { value: data.bmi, threshold: 30, weight: 0.2 },
    { value: data.age, threshold: 50, weight: 0.1 },
    { value: data.diabetesPedigree, threshold: 1.0, weight: 0.2 },
    { value: data.familyHistory ? 1 : 0, threshold: 0.5, weight: 0.2 }
  ]);
  
  const heartRisk = calculateRisk([
    { value: data.bloodPressure, threshold: 140, weight: 0.3 },
    { value: data.bmi, threshold: 30, weight: 0.15 },
    { value: data.age, threshold: 55, weight: 0.2 },
    { value: data.smoker ? 1 : 0, threshold: 0.5, weight: 0.25 },
    { value: data.familyHistory ? 1 : 0, threshold: 0.5, weight: 0.1 }
  ]);
  
  const obesityRisk = calculateRisk([
    { value: data.bmi, threshold: 30, weight: 0.6 },
    { value: data.skinThickness, threshold: 35, weight: 0.2 },
    { value: data.age, threshold: 40, weight: 0.05 },
    { value: data.smoker ? 0 : 1, threshold: 0.5, weight: 0.05 },
    { value: data.gender === "female" ? 1 : 0, threshold: 0.5, weight: 0.1 }
  ]);
  
  return [
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
  ];
};
