import { useNavigate } from "react-router-dom";
import "./BackButton.css";

const BackButton = ({ onBack }: { onBack: () => void }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    onBack(); // Trigger animation
    setTimeout(() => navigate(-1), 300); // Navigate after animation
  };

  return (
    <button className="back-button" onClick={handleBack}>
      Go Back
    </button>
  );
};

export default BackButton;
