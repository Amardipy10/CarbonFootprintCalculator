import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// --- Component & Hook Imports ---
import Questionnaire from './components/Questionnaire';
import ResultsPage from './components/ResultsPage';
import ThemeToggleButton from './components/ThemeToggleButton';
import Login from './components/Login';
import { useTheme } from './hooks/useTheme';
import { categories } from './utils/config';
import { calculateFootprint } from './utils/calculator';

const App = () => {
  // All state and handlers remain the same...
  const [user, setUser] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    city: 'mumbai', familySize: 4, carKm: 0, carType: 'petrol', bikeKm: 0, autoRickshaw: 0, publicTransport: 0, flights: 0, electricityBill: 2000, lpgCylinders: 2, heatingType: 'none', homeType: 'apartment', acUsage: 'moderate', meatMeals: 3, vegetarianMeals: 18, riceConsumption: 'medium', localFood: 60, organicFood: 20, foodWaste: 'medium', recycling: 40, waterUsage: 'medium', shoppingFreq: 'monthly', clothingPurchases: 3, plasticUsage: 'medium', festivalCelebrations: 'moderate', cookingFuel: 'lpg', waterHeating: 'electric'
  });
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [theme, toggleTheme] = useTheme();

  const handleInputChange = (key, value) => {
    const isNumericField = typeof formData?.[key] === 'number';
    const numValue = (isNumericField && value !== '') ? parseFloat(value) : value;
    setFormData(prev => ({ ...prev, [key]: numValue }));
  };
  const handleSubmit = () => {
    const calculatedResults = calculateFootprint(formData);
    setResults(calculatedResults);
    setShowResults(true);
  };
  const nextStep = () => {
    if (currentStep < categories.length - 1) setCurrentStep(currentStep + 1);
  };
  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };
  const resetCalculator = () => {
    setCurrentStep(0);
    setShowResults(false);
    setResults(null);
  };
  const handleLogout = () => {
    setUser(null);
    resetCalculator();
  };


  if (!user) {
    return (
      <div className="min-vh-100 bg-body-tertiary d-flex flex-column align-items-center justify-content-center p-3">
        <div className="position-absolute top-0 end-0 p-3">
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="text-center">
          <h1 className="mb-4">Carbon Footprint Calculator</h1>
          <p className="lead mb-4">Please sign in with your Google account to continue.</p>
          <Login onLoginSuccess={setUser} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-vh-100 bg-body-tertiary d-flex flex-column p-3 p-md-4">
      {/* HEADER BAR */}
      <header className="w-100 d-flex justify-content-between align-items-center mb-4">
        {/* Left Side: User Info */}
        <div className="d-flex align-items-center">
          <img src={user.picture} alt="profile" style={{ width: '40px', borderRadius: '50%' }} className="me-2" />
          <span>Welcome, {user.name}</span>
        </div>

        {/* Right Side: Group of Buttons with Inline Styles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          <button className="btn btn-outline-secondary btn-sm" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="w-100 d-flex flex-grow-1 justify-content-center align-items-center">
        <div className="w-100" style={{ maxWidth: '600px' }}>
          {showResults && results ? (
            <ResultsPage
              results={results}
              formData={formData}
              reset={resetCalculator}
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
      </main>
    </div>
  );
};

export default App;