
export const DISEASES = [
  {
    id: "diabetes",
    name: "Type 2 Diabetes",
    description: "Type 2 diabetes affects how your body uses sugar (glucose) for energy and can cause serious health complications if left untreated.",
    symptoms: [
      "Increased thirst and frequent urination",
      "Increased hunger",
      "Fatigue",
      "Blurred vision",
      "Slow-healing sores",
      "Frequent infections"
    ],
    riskFactors: [
      "Being overweight or obese",
      "Fat distribution (primarily in the abdomen)",
      "Inactivity",
      "Family history",
      "Age (especially after 45)",
      "Race and ethnicity",
      "High blood pressure",
      "Abnormal cholesterol levels"
    ]
  },
  {
    id: "heart-disease",
    name: "Heart Disease",
    description: "Heart disease includes conditions affecting the heart's rhythm, muscle, and blood vessels, which can lead to heart attacks and stroke.",
    symptoms: [
      "Chest pain, chest tightness, pressure (angina)",
      "Shortness of breath",
      "Pain in the neck, jaw, throat, back, or upper abdomen",
      "Pain, numbness or weakness in arms or legs",
      "Lightheadedness, dizziness, or fainting",
      "Irregular heartbeats or palpitations"
    ],
    riskFactors: [
      "Age (men over 45, women over 55)",
      "Family history of heart disease",
      "Smoking",
      "High blood pressure",
      "High cholesterol levels",
      "Diabetes",
      "Obesity",
      "Physical inactivity",
      "Excessive stress",
      "Poor diet"
    ]
  },
  {
    id: "obesity",
    name: "Obesity",
    description: "Obesity is a complex disease involving an excessive amount of body fat that increases the risk of other health problems.",
    symptoms: [
      "BMI of 30 or higher",
      "Increased sweating",
      "Snoring or sleep apnea",
      "Shortness of breath with minimal exertion",
      "Joint and back pain",
      "Fatigue and low energy"
    ],
    riskFactors: [
      "Genetic factors",
      "Family lifestyle habits",
      "Inactivity",
      "Unhealthy diet",
      "Medical conditions (Prader-Willi syndrome, Cushing syndrome)",
      "Certain medications (antidepressants, anti-seizure medications)",
      "Social and economic factors",
      "Age (metabolism slows as you age)",
      "Pregnancy (weight gained during pregnancy)"
    ]
  }
];

export const HEALTH_METRICS = [
  {
    id: "glucose",
    name: "Glucose Level",
    unit: "mg/dL",
    min: 70,
    max: 200,
    normal: "70-99 mg/dL fasting",
    description: "Blood glucose is the main sugar found in your blood and your body's main source of energy."
  },
  {
    id: "bloodPressure",
    name: "Blood Pressure",
    unit: "mmHg",
    min: 80,
    max: 200,
    normal: "Less than 120/80 mmHg",
    description: "Blood pressure is the force of blood pushing against the walls of your arteries as your heart pumps blood."
  },
  {
    id: "bmi",
    name: "Body Mass Index (BMI)",
    unit: "",
    min: 15,
    max: 45,
    normal: "18.5-24.9",
    description: "BMI is a measure of body fat based on height and weight that applies to adult men and women."
  },
  {
    id: "insulin",
    name: "Insulin",
    unit: "µU/ml",
    min: 0,
    max: 300,
    normal: "Less than 25 µU/ml fasting",
    description: "Insulin is a hormone that helps glucose enter your cells to be used for energy."
  }
];
