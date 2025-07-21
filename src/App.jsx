import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import Questionnaire from './components/Questionnaire';
import ResultsPage from './components/ResultsPage';
import ThemeToggleButton from './components/ThemeToggleButton';

// Hook & Util Imports
import { useTheme } from './hooks/useTheme';
import { categories } from './utils/config';
import { calculateFootprint } from './utils/calculator';

const CarbonFootprintCalculator = () => {
  // --- STATE MANAGEMENT ---
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    city: 'mumbai', familySize: 4, carKm: 0, carType: 'petrol', bikeKm: 0, autoRickshaw: 0, publicTransport: 0, flights: 0, electricityBill: 2000, lpgCylinders: 2, heatingType: 'none', homeType: 'apartment', acUsage: 'moderate', meatMeals: 3, vegetarianMeals: 18, riceConsumption: 'medium', localFood: 60, organicFood: 20, foodWaste: 'medium', recycling: 40, waterUsage: 'medium', shoppingFreq: 'monthly', clothingPurchases: 3, plasticUsage: 'medium', festivalCelebrations: 'moderate', cookingFuel: 'lpg', waterHeating: 'electric'
  });
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  
  // --- THEME HOOK ---
  const [theme, toggleTheme] = useTheme();

  // --- EVENT HANDLERS ---
  const handleInputChange = (key, value) => {
    const isNumericField = typeof formData[key] === 'number';
    const numValue = (isNumericField && value !== '') ? parseFloat(value) : value;
    setFormData(prev => ({ ...prev, [key]: numValue }));
  };
  
  const handleSubmit = () => {
    const calculatedResults = calculateFootprint(formData);
    setResults(calculatedResults);
    setShowResults(true);
  };

  const nextStep = () => {
    if (currentStep < categories.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const reset = () => {
    setCurrentStep(0);
    setShowResults(false);
    setResults(null);
  };

  // --- MAIN RENDER ---
  return (
    <div className="min-vh-100 bg-body-tertiary d-flex align-items-center justify-content-center p-3 p-md-4 p-lg-5 position-relative">
      <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      
      {showResults && results ? (
        <ResultsPage
          results={results}
          formData={formData}
          reset={reset}
        />
      ) : (
        <Questionnaire
          currentStep={currentStep}
          categories={categories}
          formData={formData}
          handleInputChange={handleInputChange}
          prevStep={prevStep}
          nextStep={nextStep}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default CarbonFootprintCalculator;