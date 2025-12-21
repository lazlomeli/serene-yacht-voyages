import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ironLogo from "@/assets/iron-logo.svg";

const LoadingOverlay = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show loading overlay on route change
    setIsLoading(true);
    
    // Hide after 500ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center">
      <img
        src={ironLogo}
        alt="Loading"
        className="h-20 w-20 animate-blink brightness-0 opacity-5"
      />
    </div>
  );
};

export default LoadingOverlay;

