
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Brain, Database, LineChart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 px-6 bg-muted">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">About ChronoDetect</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              ChronoDetect is an AI-powered health screening tool designed to identify early
              risk factors for chronic diseases, helping patients and healthcare providers
              take proactive measures for better health outcomes.
            </p>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We believe in the power of early detection to transform healthcare outcomes. 
                By providing accessible AI-powered screening tools, we aim to reduce the burden 
                of chronic diseases globally and empower individuals to take control of their health.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Prevention Focus
                </h3>
                <p className="text-muted-foreground">
                  We prioritize prevention over treatment, believing that identifying risks early 
                  leads to better outcomes and reduces healthcare costs.
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  AI-Powered Insights
                </h3>
                <p className="text-muted-foreground">
                  Our Multi-Layer Perceptron (MLP) model has been trained on diverse healthcare 
                  datasets to provide accurate risk assessments.
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Data-Driven Approach
                </h3>
                <p className="text-muted-foreground">
                  We use open-source healthcare datasets and continually refine our models 
                  to improve prediction accuracy and reliability.
                </p>
              </div>
              
              <div className="bg-muted rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-primary" />
                  Accessible Healthcare
                </h3>
                <p className="text-muted-foreground">
                  Our tools are designed to be accessible to both individuals and healthcare 
                  providers, bridging gaps in preventative care.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology */}
        <section className="py-16 px-6 bg-muted">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Technology</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                ChronoDetect uses advanced machine learning techniques to analyze key health indicators
                and identify patterns associated with chronic disease risk.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">How Our AI Works</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Our model analyzes key medical features including age, glucose levels, blood pressure,
                    cholesterol, and other health indicators to identify risk patterns.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Multi-Layer Perceptron (MLP) Model</h4>
                  <p className="text-muted-foreground">
                    We use a sophisticated neural network architecture optimized for binary classification
                    of chronic disease risk, trained on diverse healthcare datasets.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">RESTful API Integration</h4>
                  <p className="text-muted-foreground">
                    Our backend is powered by Flask, providing a robust API for real-time predictions
                    that can be integrated with various healthcare systems.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Privacy & Security</h4>
                  <p className="text-muted-foreground">
                    We prioritize data security and privacy, with strict protocols for handling
                    sensitive health information in compliance with industry standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 px-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Take the first step toward proactive health management with our AI-powered screening tool.
            </p>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/screen">Try ChronoDetect Now</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
