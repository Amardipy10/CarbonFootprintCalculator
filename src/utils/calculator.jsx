const getRating = (emissions) => {
    if (emissions < 200) return { level: 'Excellent', textColor: 'text-success', bgColor: 'bg-success-subtle' };
    if (emissions < 400) return { level: 'Good', textColor: 'text-primary', bgColor: 'bg-primary-subtle' };
    if (emissions < 600) return { level: 'Average', textColor: 'text-warning', bgColor: 'bg-warning-subtle' };
    if (emissions < 800) return { level: 'High', textColor: 'text-danger', bgColor: 'bg-danger-subtle' };
    return { level: 'Very High', textColor: 'text-danger-emphasis', bgColor: 'bg-danger-subtle' };
};

const calculateTreesNeeded = (monthlyEmissions) => {
    const treeAbsorption = { neem: 21.7, banyan: 24.5, peepal: 23.8, mango: 19.5, teak: 20.8, bamboo: 35.3, average: 21.7 };
    const annualEmissions = monthlyEmissions * 12;
    const totalAnnualOffset = Math.ceil(annualEmissions / treeAbsorption.average);
    const monthlyPlantingGoal = Math.ceil(totalAnnualOffset / 12) || 1;
    const calculateTreeCount = (annualAbsorption) => Math.ceil(annualEmissions / annualAbsorption);
    return {
      monthlyPlantingGoal: monthlyPlantingGoal,
      totalAnnualOffset: totalAnnualOffset,
      treeTypes: [
        { name: 'Neem', count: calculateTreeCount(treeAbsorption.neem), benefit: 'Air purification, medicinal' },
        { name: 'Peepal', count: calculateTreeCount(treeAbsorption.peepal), benefit: 'Oxygen production, sacred' },
        { name: 'Banyan', count: calculateTreeCount(treeAbsorption.banyan), benefit: 'Large canopy, long-lived' },
        { name: 'Bamboo', count: calculateTreeCount(treeAbsorption.bamboo), benefit: 'Fast growing, versatile' }
      ]
    };
};

export const calculateFootprint = (formData) => {
    // ... (All the calculation constants and logic from the original component)
    const cityEmissionFactors = { mumbai: 0.82, delhi: 0.95, bangalore: 0.88, chennai: 0.85, kolkata: 1.2, hyderabad: 0.9, pune: 0.82, ahmedabad: 0.9, other: 0.9 };
    const carEmissionsFactor = { petrol: 0.18, diesel: 0.16, cng: 0.12, electric: 0.05, hybrid: 0.10 };
    const carEmissions = formData.carKm * carEmissionsFactor[formData.carType];
    const bikeEmissions = formData.bikeKm * 0.08;
    const autoEmissions = formData.autoRickshaw * 0.15;
    const publicTransportEmissions = formData.publicTransport * 0.04;
    const flightEmissions = (formData.flights * 250) / 12;
    const transportEmissions = carEmissions + bikeEmissions + autoEmissions + publicTransportEmissions + flightEmissions;
    const electricityEmissions = (formData.electricityBill / 6.5) * cityEmissionFactors[formData.city];
    const lpgEmissionsVal = formData.lpgCylinders * 45;
    const cookingEmissionsFactor = { lpg: 1, electric: 0.6, wood: 2.5, kerosene: 1.8 };
    const cookingEmissions = lpgEmissionsVal * cookingEmissionsFactor[formData.cookingFuel];
    const acEmissionsFactor = { none: 0, minimal: 50, moderate: 150, heavy: 300 };
    const waterHeatingEmissionsFactor = { electric: 40, gas: 25, solar: 5, none: 0 };
    const homeMultiplier = { apartment: 1.0, large_apartment: 1.3, independent: 1.5, villa: 2.0 };
    const energyEmissions = (electricityEmissions + cookingEmissions + acEmissionsFactor[formData.acUsage] + waterHeatingEmissionsFactor[formData.waterHeating]) * homeMultiplier[formData.homeType] / formData.familySize;
    const meatEmissions = formData.meatMeals * 4 * 4.2;
    const vegEmissions = formData.vegetarianMeals * 4 * 1.2;
    const riceEmissionsFactor = { low: 15, medium: 35, high: 55 };
    const foodWasteMultiplier = { low: 1.0, medium: 1.2, high: 1.5 };
    const localFoodReduction = (formData.localFood / 100) * 0.15;
    const organicReduction = (formData.organicFood / 100) * 0.08;
    const foodEmissions = ((meatEmissions + vegEmissions + riceEmissionsFactor[formData.riceConsumption]) * foodWasteMultiplier[formData.foodWaste] * (1 - localFoodReduction - organicReduction)) / formData.familySize;
    const recyclingReduction = (formData.recycling / 100) * 0.12;
    const waterEmissionsFactor = { low: 15, medium: 25, high: 40 };
    const shoppingEmissionsFactor = { weekly: 60, biweekly: 45, monthly: 35 };
    const plasticEmissionsFactor = { low: 8, medium: 20, high: 35 };
    const festivalEmissionsFactor = { minimal: 10, moderate: 25, elaborate: 50 };
    const lifestyleEmissions = (waterEmissionsFactor[formData.waterUsage] + shoppingEmissionsFactor[formData.shoppingFreq] + (formData.clothingPurchases * 6) + plasticEmissionsFactor[formData.plasticUsage] + (festivalEmissionsFactor[formData.festivalCelebrations] / 12)) * (1 - recyclingReduction) / formData.familySize;
    const totalEmissions = transportEmissions + energyEmissions + foodEmissions + lifestyleEmissions;
    
    return {
      total: totalEmissions,
      breakdown: { transport: transportEmissions, energy: energyEmissions, food: foodEmissions, lifestyle: lifestyleEmissions },
      rating: getRating(totalEmissions),
      treesNeeded: calculateTreesNeeded(totalEmissions)
    };
};