
import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, User, Home, ActivitySquare, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/auth/LoginModal";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <nav className="w-full py-4 px-6 bg-white shadow-sm border-b flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Heart className="h-6 w-6 text-primary" />
        <Link to="/" className="text-xl font-bold text-primary">
          ChronoDetect
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-foreground hover:text-primary flex items-center gap-1">
          <Home className="h-4 w-4" />
          <span>Home</span>
        </Link>
        <Link to="/screen" className="text-foreground hover:text-primary flex items-center gap-1">
          <ActivitySquare className="h-4 w-4" />
          <span>Screening</span>
        </Link>
        <Link to="/about" className="text-foreground hover:text-primary flex items-center gap-1">
          <Info className="h-4 w-4" />
          <span>About</span>
        </Link>
      </div>

      <Button 
        variant="outline" 
        size="sm" 
        className="flex items-center gap-1"
        onClick={() => setShowLoginModal(true)}
      >
        <User className="h-4 w-4" />
        <span>Login</span>
      </Button>

      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
    </nav>
  );
};

export default Navbar;
