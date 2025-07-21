import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
    const progressPercentage = ((currentStep + 1) / totalSteps) * 100;
    return (
        <div className="progress" role="progressbar" aria-valuenow={progressPercentage} aria-valuemin="0" aria-valuemax="100" style={{ height: '10px' }}>
            <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>
    );
};

export default ProgressBar;