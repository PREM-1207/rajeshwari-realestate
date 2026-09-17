import { useEffect, useState } from "react";

function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loading-screen">

      {/* REAL LOGO */}
      <div className="loading-logo-circle">
        <img
          src="/images/rajeshwari-logo.png"
          alt="Rajeshwari Realestate"
        />
      </div>

      {/* BRAND NAME */}
      <div className="loading-brand">
        <h1>RAJESHWARI</h1>

        <span>REAL ESTATE</span>
      </div>

      {/* GOLD LINE */}
      <div className="loading-line">
        <span></span>
      </div>

      {/* TAGLINE */}
      <p className="loading-tagline">
        CREATING YOUR SPACE
      </p>

    </div>
  );
}

export default LoadingScreen;