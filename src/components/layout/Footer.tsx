
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-lg font-bold text-foreground">ChronoDetect</span>
            </div>
            <p className="text-muted-foreground text-sm">
              AI-powered early detection of chronic diseases to help patients and healthcare providers take proactive measures.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/screen" className="text-muted-foreground hover:text-primary text-sm">
                  Screening Tool
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-muted-foreground hover:text-primary text-sm">
                  Medical Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} ChronoDetect. All rights reserved. Not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
