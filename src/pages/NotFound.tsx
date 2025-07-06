import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            asChild
            className="bg-gradient-primary hover:glow-effect transition-all duration-300 hover-lift"
          >
            <a href="/">Return Home</a>
          </Button>
          
          <div className="text-sm text-muted-foreground">
            <p>Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <a href="/how-it-works" className="text-primary hover:text-primary-glow transition-colors">
                How It Works
              </a>
              <a href="/examples" className="text-primary hover:text-primary-glow transition-colors">
                Examples
              </a>
              <a href="/about" className="text-primary hover:text-primary-glow transition-colors">
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
