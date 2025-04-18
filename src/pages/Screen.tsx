
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { Info } from "lucide-react";

// Define input interfaces
interface ScreeningForm {
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

const Screen = () => {
  const navigate = useNavigate();
  
  // Initial form state
  const [form, setForm] = useState<ScreeningForm>({
    age: 35,
    gender: "female",
    glucose: 100,
    bloodPressure: 120,
    skinThickness: 25,
    insulin: 80,
    bmi: 25,
    diabetesPedigree: 0.5,
    smoker: false,
    familyHistory: false
  });

  // Form update handler
  const updateForm = (field: keyof ScreeningForm, value: any) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // In a real application, this would call the Flask backend API
      // For now, we'll simulate this with a mock API call
      
      // Show loading toast
      toast({
        title: "Analyzing data...",
        description: "Please wait while our AI processes your health information.",
        duration: 2000,
      });
      
      // Simulate API call with setTimeout
      setTimeout(() => {
        // Store form data in session storage to use on the results page
        sessionStorage.setItem('screeningData', JSON.stringify(form));
        
        // Navigate to results page
        navigate("/results");
      }, 2000);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem processing your data. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-3">Health Screening Tool</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enter your health information below to receive an AI-powered risk assessment for common chronic diseases.
            </p>
          </div>
          
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle>Health Information</CardTitle>
              <CardDescription>
                All information is processed securely and will not be stored without your consent.
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-8">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Basic Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input 
                        id="age" 
                        type="number" 
                        min={1} 
                        max={120} 
                        value={form.age} 
                        onChange={(e) => updateForm('age', parseInt(e.target.value))}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Select 
                        value={form.gender} 
                        onValueChange={(value) => updateForm('gender', value)}
                      >
                        <SelectTrigger id="gender">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                {/* Health Metrics */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Health Metrics</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="glucose">Glucose Level (mg/dL)</Label>
                        <span className="text-sm text-muted-foreground">{form.glucose}</span>
                      </div>
                      <Slider 
                        id="glucose" 
                        min={70} 
                        max={200} 
                        step={1} 
                        value={[form.glucose]} 
                        onValueChange={(value) => updateForm('glucose', value[0])}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>70</span>
                        <span>135</span>
                        <span>200</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="bloodPressure">Blood Pressure (mmHg)</Label>
                        <span className="text-sm text-muted-foreground">{form.bloodPressure}</span>
                      </div>
                      <Slider 
                        id="bloodPressure" 
                        min={80} 
                        max={200} 
                        step={1} 
                        value={[form.bloodPressure]} 
                        onValueChange={(value) => updateForm('bloodPressure', value[0])}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>80</span>
                        <span>140</span>
                        <span>200</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="bmi">BMI</Label>
                        <span className="text-sm text-muted-foreground">{form.bmi}</span>
                      </div>
                      <Slider 
                        id="bmi" 
                        min={15} 
                        max={45} 
                        step={0.1} 
                        value={[form.bmi]} 
                        onValueChange={(value) => updateForm('bmi', value[0])}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>15</span>
                        <span>30</span>
                        <span>45</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="insulin">Insulin (µU/ml)</Label>
                        <span className="text-sm text-muted-foreground">{form.insulin}</span>
                      </div>
                      <Slider 
                        id="insulin" 
                        min={0} 
                        max={300} 
                        step={1} 
                        value={[form.insulin]} 
                        onValueChange={(value) => updateForm('insulin', value[0])}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0</span>
                        <span>150</span>
                        <span>300</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="skinThickness">Skin Thickness (mm)</Label>
                        <span className="text-sm text-muted-foreground">{form.skinThickness}</span>
                      </div>
                      <Slider 
                        id="skinThickness" 
                        min={0} 
                        max={100} 
                        step={1} 
                        value={[form.skinThickness]} 
                        onValueChange={(value) => updateForm('skinThickness', value[0])}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0</span>
                        <span>50</span>
                        <span>100</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="diabetesPedigree">Diabetes Pedigree Function</Label>
                        <span className="text-sm text-muted-foreground">{form.diabetesPedigree}</span>
                      </div>
                      <Slider 
                        id="diabetesPedigree" 
                        min={0.1} 
                        max={2.5} 
                        step={0.01} 
                        value={[form.diabetesPedigree]} 
                        onValueChange={(value) => updateForm('diabetesPedigree', value[0])}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>0.1</span>
                        <span>1.3</span>
                        <span>2.5</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Additional Factors */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Additional Risk Factors</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="smoker">Smoker</Label>
                        <p className="text-sm text-muted-foreground">Do you currently smoke or have a history of smoking?</p>
                      </div>
                      <Switch 
                        id="smoker" 
                        checked={form.smoker} 
                        onCheckedChange={(value) => updateForm('smoker', value)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="familyHistory">Family History</Label>
                        <p className="text-sm text-muted-foreground">Do you have a family history of chronic diseases?</p>
                      </div>
                      <Switch 
                        id="familyHistory" 
                        checked={form.familyHistory} 
                        onCheckedChange={(value) => updateForm('familyHistory', value)}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Disclaimer */}
                <div className="bg-muted p-4 rounded-lg text-sm flex items-start gap-3">
                  <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    This tool is intended for informational purposes only and is not a substitute for professional medical advice, 
                    diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any 
                    questions you may have regarding a medical condition.
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t pt-6">
                <Button variant="outline" type="button" onClick={() => navigate("/")}>
                  Cancel
                </Button>
                <Button type="submit">Submit and Get Results</Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Screen;
