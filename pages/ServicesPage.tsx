import { useState } from "react";
import BackButton from "../components/BackButton/BackButton";
import "../styles/Services.css"
import Services from "../components/Services/Services";

const ServicesPage = () => {
  const [isExiting, setIsExiting] = useState(false);

  const handleBack = () => {
    setIsExiting(true);
  };

  return (
    <div className={`services-page ${isExiting ? "slide-up" : "slide-down"}`}>
      <BackButton onBack={handleBack} />
      <Services />
    </div>
  );
};

export default ServicesPage;
