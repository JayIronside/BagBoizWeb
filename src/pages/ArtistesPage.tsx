import { useState } from "react";
import BackButton from "../components/BackButton/BackButton";
import Artistes from "../components/Artistes/Artistes";
import "../styles/Artistes.css"

const ArtistesPage = () => {
  const [isExiting, setIsExiting] = useState(false);

  const handleBack = () => {
    setIsExiting(true); // Trigger slide-up animation
  };

  return (
    <div className={`artistes-page ${isExiting ? "slide-up" : "slide-down"}`}>
      <BackButton onBack={handleBack} />
      <Artistes />
    </div>
  );
};

export default ArtistesPage;
