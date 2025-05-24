
import { useState, useEffect } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Initial check
    checkIfMobile();
    
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  const checkIfMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };
  
  return isMobile;
}
