
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Activity, HeartPulse, Microscope, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-medical-700 to-medical-900 text-white">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Early Detection Saves Lives
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-medical-50 max-w-3xl mx-auto">
              ChronoDetect uses advanced AI to identify early risk factors for chronic diseases, helping patients and healthcare providers take proactive measures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700">
                <Link to="/screen">Get Screened Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How ChronoDetect Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-muted p-6 rounded-lg flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Activity className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Data Input</h3>
                <p className="text-muted-foreground">Enter key health metrics and medical history information</p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Microscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">AI Analysis</h3>
                <p className="text-muted-foreground">Our model analyzes patterns against millions of health records</p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <HeartPulse className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Risk Assessment</h3>
                <p className="text-muted-foreground">Receive detailed risk profiles for various chronic conditions</p>
              </div>
              
              <div className="bg-muted p-6 rounded-lg flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Prevention Plan</h3>
                <p className="text-muted-foreground">Get personalized recommendations for reducing your risk factors</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 px-6 bg-muted">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Take Control of Your Health Today</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Early detection is key to managing chronic diseases. Our AI-powered screening tool can help identify risk factors before symptoms appear.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link to="/screen" className="flex items-center gap-2">
                Start Screening
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
