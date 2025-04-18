
export interface ScreeningData {
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

export interface DiseaseRisk {
  name: string;
  risk: number;
  description: string;
  recommendations: string[];
}
