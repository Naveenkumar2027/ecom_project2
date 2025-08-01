import React, { useState } from 'react';

type Filters = {
  budget: string;
  location: string;
  language: string;
  date: string;
  ratings: string;
};

type Props = {
  onApplyFilters: (filters: Filters) => void;
};

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

export const FilterPanel = ({ onApplyFilters }: Props) => {
  const [filters, setFilters] = useState<Filters>({
    budget: '',
    location: '',
    language: '',
    date: '',
    ratings: '',
  });

  const handleChange = (field: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
  };

  return (
    <div className="w-1/4 p-4 border-r space-y-4">
      <h2 className="font-bold text-lg">Filters</h2>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Budget</label>
        <input
          type="text"
          className="border p-1 rounded"
          placeholder="Enter budget"
          value={filters.budget}
          onChange={e => handleChange('budget', e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Location</label>
        <select
          className="border p-1 rounded"
          value={filters.location}
          onChange={e => handleChange('location', e.target.value)}
        >
          <option value="">Select a state</option>
          {indianStates.map(state => (
            <option key={state} value={state}>{state}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Language</label>
        <input
          type="text"
          className="border p-1 rounded"
          placeholder="Enter language"
          value={filters.language}
          onChange={e => handleChange('language', e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Date</label>
        <input
          type="date"
          className="border p-1 rounded"
          value={filters.date}
          onChange={e => handleChange('date', e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium">Ratings</label>
        <input
          type="text"
          className="border p-1 rounded"
          placeholder="Enter ratings"
          value={filters.ratings}
          onChange={e => handleChange('ratings', e.target.value)}
        />
      </div>

      <button
        onClick={handleApply}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Apply Filters
      </button>
    </div>
  );
};
