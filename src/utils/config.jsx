import { Users, Car, Home, Utensils, Leaf } from 'lucide-react';

export const categories = [
    {
      title: "Personal Information",
      icon: Users,
      fields: [
        { key: 'city', label: 'City', type: 'select', options: [
          { value: 'mumbai', label: 'Mumbai' }, { value: 'delhi', label: 'Delhi/NCR' }, { value: 'bangalore', label: 'Bangalore' }, { value: 'chennai', label: 'Chennai' }, { value: 'kolkata', label: 'Kolkata' }, { value: 'hyderabad', label: 'Hyderabad' }, { value: 'pune', label: 'Pune' }, { value: 'ahmedabad', label: 'Ahmedabad' }, { value: 'other', label: 'Other City' }
        ]},
        { key: 'familySize', label: 'Family size', type: 'number', unit: 'members' }
      ]
    },
    {
      title: "Transportation",
      icon: Car,
      fields: [
        { key: 'carKm', label: 'Car/Taxi travel per month', type: 'number', unit: 'km' },
        { key: 'carType', label: 'Primary vehicle fuel type', type: 'select', options: [
          { value: 'petrol', label: 'Petrol' }, { value: 'diesel', label: 'Diesel' }, { value: 'cng', label: 'CNG' }, { value: 'electric', label: 'Electric' }, { value: 'hybrid', label: 'Hybrid' }
        ]},
        { key: 'bikeKm', label: 'Two-wheeler travel per month', type: 'number', unit: 'km' },
        { key: 'autoRickshaw', label: 'Auto-rickshaw travel per month', type: 'number', unit: 'km' },
        { key: 'publicTransport', label: 'Bus/Metro/Train travel per month', type: 'number', unit: 'km' },
        { key: 'flights', label: 'Flight travel per year', type: 'number', unit: 'hours' }
      ]
    },
    {
      title: "Home Energy",
      icon: Home,
      fields: [
        { key: 'electricityBill', label: 'Monthly electricity bill', type: 'number', unit: '₹' },
        { key: 'lpgCylinders', label: 'LPG cylinders used per month', type: 'number', unit: 'cylinders' },
        { key: 'cookingFuel', label: 'Primary cooking fuel', type: 'select', options: [
          { value: 'lpg', label: 'LPG Gas' }, { value: 'electric', label: 'Electric Stove' }, { value: 'wood', label: 'Wood/Biomass' }, { value: 'kerosene', label: 'Kerosene' }
        ]},
        { key: 'homeType', label: 'Home type', type: 'select', options: [
          { value: 'apartment', label: '1-2 BHK Apartment' }, { value: 'large_apartment', label: '3+ BHK Apartment' }, { value: 'independent', label: 'Independent House' }, { value: 'villa', label: 'Villa/Large House' }
        ]},
        { key: 'acUsage', label: 'Air conditioning usage', type: 'select', options: [
          { value: 'none', label: 'No AC' }, { value: 'minimal', label: 'Minimal (1-2 hours/day)' }, { value: 'moderate', label: 'Moderate (4-6 hours/day)' }, { value: 'heavy', label: 'Heavy (8+ hours/day)' }
        ]},
        { key: 'waterHeating', label: 'Water heating method', type: 'select', options: [
          { value: 'electric', label: 'Electric Geyser' }, { value: 'gas', label: 'Gas Geyser' }, { value: 'solar', label: 'Solar Water Heater' }, { value: 'none', label: 'No Water Heating' }
        ]}
      ]
    },
    {
      title: "Food & Diet",
      icon: Utensils,
      fields: [
        { key: 'meatMeals', label: 'Non-vegetarian meals per week', type: 'number', unit: 'meals' },
        { key: 'vegetarianMeals', label: 'Vegetarian meals per week', type: 'number', unit: 'meals' },
        { key: 'riceConsumption', label: 'Rice consumption level', type: 'select', options: [
          { value: 'low', label: 'Low (occasional)' }, { value: 'medium', label: 'Medium (daily 1 meal)' }, { value: 'high', label: 'High (daily 2+ meals)' }
        ]},
        { key: 'localFood', label: 'Locally sourced food percentage', type: 'range', min: 0, max: 100, unit: '%' },
        { key: 'organicFood', label: 'Organic food percentage', type: 'range', min: 0, max: 100, unit: '%' },
        { key: 'foodWaste', label: 'Food wastage level', type: 'select', options: [
          { value: 'low', label: 'Low (minimal waste)' }, { value: 'medium', label: 'Medium (some leftovers)' }, { value: 'high', label: 'High (significant waste)' }
        ]}
      ]
    },
    {
      title: "Lifestyle & Consumption",
      icon: Leaf,
      fields: [
        { key: 'recycling', label: 'Waste segregation & recycling', type: 'range', min: 0, max: 100, unit: '%' },
        { key: 'waterUsage', label: 'Water usage pattern', type: 'select', options: [
          { value: 'low', label: 'Conservative (bucket baths, efficient use)' }, { value: 'medium', label: 'Moderate (mix of bucket/shower)' }, { value: 'high', label: 'High (long showers, frequent washing)' }
        ]},
        { key: 'shoppingFreq', label: 'Shopping frequency', type: 'select', options: [
          { value: 'weekly', label: 'Weekly' }, { value: 'biweekly', label: 'Bi-weekly' }, { value: 'monthly', label: 'Monthly' }
        ]},
        { key: 'clothingPurchases', label: 'New clothing items per month', type: 'number', unit: 'items' },
        { key: 'plasticUsage', label: 'Single-use plastic usage', type: 'select', options: [
          { value: 'low', label: 'Low (carry bags, avoid plastic)' }, { value: 'medium', label: 'Medium (occasional use)' }, { value: 'high', label: 'High (frequent plastic use)' }
        ]},
        { key: 'festivalCelebrations', label: 'Festival celebration intensity', type: 'select', options: [
          { value: 'minimal', label: 'Minimal (eco-friendly)' }, { value: 'moderate', label: 'Moderate (traditional)' }, { value: 'elaborate', label: 'Elaborate (grand celebrations)' }
        ]}
      ]
    }
];