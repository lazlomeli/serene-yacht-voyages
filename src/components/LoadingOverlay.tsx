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
      <div className="flex flex-col items-center gap-4">
        <img
          src={ironLogo}
          alt="Iron Monkey Logo"
          className="h-24 w-24 animate-blink"
          style={{ filter: 'invert(var(--logo-invert, 0))' }}
        />
        <div className="flex gap-1">
          <span className="h-2 w-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></span>
          <span className="h-2 w-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></span>
          <span className="h-2 w-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;

