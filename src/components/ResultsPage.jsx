import React from 'react';
import { Sun, Moon, Leaf, Car, Home, Utensils, Zap, Award, Target, Trees, Users, ArrowRight, ArrowLeft, RefreshCw } from 'lucide-react';

const ResultsPage = ({ results, formData, reset }) => {
  const { total, rating, breakdown, treesNeeded } = results;

  return (
    <div className="container-lg">
      <div className="text-center mb-5">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <Leaf className="text-success me-3" style={{width: '48px', height: '48px'}} />
          <h1 className="display-5 fw-bold text-body-emphasis">Your Carbon Footprint Results</h1>
        </div>
        <p className="lead text-muted">Here is a breakdown of your environmental impact.</p>
      </div>

      <div className="card shadow-lg p-4 p-sm-5 mb-4 rounded-4">
        <div className="text-center mb-4">
          <div className="display-4 fw-bold text-body-emphasis mb-2">
            {total.toFixed(1)} <span className="h3 text-muted">kg CO₂/month</span>
          </div>
          <div className={`d-inline-flex align-items-center px-3 py-2 rounded-pill fw-semibold ${rating.bgColor} ${rating.textColor}`}>
            <Award className="me-2" style={{width: '20px', height: '20px'}} /> {rating.level} Rating
          </div>
          <p className="text-muted mt-2">Annual footprint: <span className="fw-semibold">{(total * 12 / 1000).toFixed(2)} tonnes CO₂</span></p>
          <p className="small text-muted mt-1">Family size: {formData.familySize} members | City: {formData.city.charAt(0).toUpperCase() + formData.city.slice(1)}</p>
        </div>
        <div className="row g-3">
          {Object.entries(breakdown).map(([key, value]) => {
            const percentage = (value / total * 100).toFixed(1);
            const icons = { transport: <Car />, energy: <Zap />, food: <Utensils />, lifestyle: <Leaf /> };
            return (
              <div key={key} className="col-6 col-md-3">
                <div className="text-center p-3 bg-body-secondary rounded-3 h-100">
                  <div className="text-primary mb-2">{icons[key]}</div>
                  <div className="h5 fw-semibold text-body-emphasis text-capitalize">{key}</div>
                  <div className="fs-4 fw-bold text-primary">{value.toFixed(1)}</div>
                  <div className="small text-muted">{percentage}%</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="bg-success-subtle rounded-4 shadow-lg p-4 p-sm-5 mb-4">
        <h2 className="fw-bold text-body-emphasis mb-4 d-flex align-items-center"><Trees className="me-2 text-success" /> Plant Trees to Offset Your Footprint</h2>
        <div className="row g-4 mb-4">
          <div className="col-md-6"><div className="text-center p-4 bg-body rounded-3 shadow-sm h-100"><Trees className="text-success mx-auto mb-3" style={{width:'48px', height:'48px'}}/><div className="display-5 fw-bold text-success mb-2">{treesNeeded.monthlyPlantingGoal}</div><div className="h5 text-body-emphasis fw-semibold">Monthly Planting Goal</div></div></div>
          <div className="col-md-6"><div className="text-center p-4 bg-body rounded-3 shadow-sm h-100"><Target className="text-primary mx-auto mb-3" style={{width:'48px', height:'48px'}} /><div className="display-5 fw-bold text-primary mb-2">{treesNeeded.totalAnnualOffset}</div><div className="h5 text-body-emphasis fw-semibold">Total Trees for Annual Offset</div></div></div>
        </div>
        <div className="bg-body rounded-3 p-4 shadow-sm">
          <h3 className="h5 fw-bold text-body-emphasis mb-3">Recommended Trees for India:</h3>
          <div className="row g-3">
            {treesNeeded.treeTypes.map((tree, index) => (
              <div key={index} className="col-6 col-lg-3"><div className="p-3 border border-success-subtle rounded-3 bg-success-subtle h-100"><div className="fw-semibold text-success-emphasis">{tree.name}</div><div className="fs-4 fw-bold text-success">{tree.count}</div><div className="small text-muted mt-1">{tree.benefit}</div></div></div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-success-subtle rounded-3"><p className="text-success-emphasis mb-0"><strong className="fw-semibold">💡 Pro Tip:</strong> Partner with organizations like Grow-Trees.com, SankalpTaru, or local NGOs. Many corporations sponsor tree planting - check if your employer has such programs!</p></div>
        </div>
      </div>
      
      <div className="text-center mt-5">
        <button onClick={reset} className="btn btn-primary btn-lg d-inline-flex align-items-center px-4 py-2">
          <RefreshCw className="me-2" style={{width:'20px', height:'20px'}}/> Calculate Again
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;