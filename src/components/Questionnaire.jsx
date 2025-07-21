import React from 'react';
import FormField from './FormField';
import ProgressBar from './ProgressBar';
import { ArrowLeft, ArrowRight, Leaf } from 'lucide-react';

const Questionnaire = ({
  currentStep,
  categories,
  formData,
  handleInputChange,
  prevStep,
  nextStep,
  handleSubmit
}) => {
  const currentCategory = categories[currentStep];
  const Icon = currentCategory.icon;

  const handleNext = () => {
    if (currentStep < categories.length - 1) {
      nextStep();
    } else {
      handleSubmit();
    }
  };

  return (
    <div className="w-100" style={{maxWidth: '700px'}}>
      <div className="text-center mb-4">
        <Leaf className="text-success mx-auto mb-2" style={{width: '40px', height: '40px'}} />
        <h1 className="h2 fw-bold text-body-emphasis">Carbon Footprint Calculator</h1>
      </div>

      <div className="card shadow-lg rounded-4">
        <div className="card-body p-4 p-sm-5">
          <div className="mb-5">
            <div className="d-flex justify-content-between mb-1 small">
              {categories.map((cat, index) => (
                <div key={index} className={`fw-semibold ${index <= currentStep ? 'text-primary' : 'text-muted'}`}>
                  {cat.title.split(' ')[0]}
                </div>
              ))}
            </div>
            <ProgressBar currentStep={currentStep} totalSteps={categories.length} />
          </div>

          <div>
            <div className="d-flex align-items-center h4 fw-bold text-body-emphasis mb-4">
              <span className="text-primary me-3"><Icon className="w-6 h-6" /></span>
              <h2>{currentCategory.title}</h2>
            </div>
            {currentCategory.fields.map(field => (
              <FormField
                key={field.key}
                field={field}
                value={formData[field.key]}
                onInputChange={handleInputChange}
              />
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-5">
            <button onClick={prevStep} disabled={currentStep === 0} className="btn btn-outline-secondary btn-lg d-inline-flex align-items-center">
              <ArrowLeft className="me-2" style={{width:'20px', height:'20px'}}/> Back
            </button>
            <button onClick={handleNext} className="btn btn-primary btn-lg d-inline-flex align-items-center">
              {currentStep === categories.length - 1 ? 'Calculate' : 'Next'}
              {currentStep < categories.length - 1 && <ArrowRight className="ms-2" style={{width:'20px', height:'20px'}} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;