import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Vendor } from "../types";

const dummyVendors: Vendor[] = [
  { id: 1, name: "Lens & Light", rating: 4.5, price: 15000, category: "Photographers", availability: ["2025-08-05", "2025-08-10"], location: "Maharashtra" },
  { id: 2, name: "Delight Caterers", rating: 4.2, price: 20000, category: "Caterers", availability: ["2025-08-01", "2025-08-12"], location: "Karnataka" },
  { id: 3, name: "Sacred Purohits", rating: 4.7, price: 12000, category: "Purohits", availability: ["2025-08-03", "2025-08-15"], location: "Tamil Nadu" },
  { id: 4, name: "Elegant Decor", rating: 4.3, price: 18000, category: "Decorators", availability: ["2025-08-07", "2025-08-20"], location: "Delhi" },
  { id: 5, name: "Shutter Pro", rating: 4.6, price: 16000, category: "Photographers", availability: ["2025-08-02", "2025-08-18"], location: "Maharashtra" },
  { id: 6, name: "Gourmet Caterers", rating: 4.1, price: 22000, category: "Caterers", availability: ["2025-08-04", "2025-08-22"], location: "Karnataka" },
  { id: 7, name: "Vedic Purohits", rating: 4.4, price: 13000, category: "Purohits", availability: ["2025-08-06", "2025-08-25"], location: "Tamil Nadu" },
  { id: 8, name: "Floral Designs", rating: 4.0, price: 17000, category: "Decorators", availability: ["2025-08-08", "2025-08-28"], location: "Delhi" },
];

const categories = ['Photographers', 'Caterers', 'Purohits', 'Decorators'];

const VendorPage = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filterBudget, setFilterBudget] = useState('');
  const [filterLocation, setFilterLocation] = useState('');

  const handleVendorClick = (id: number) => {
    navigate(`/vendor/${id}`);
  };

  const filteredVendors = dummyVendors.filter(vendor => {
    if (searchTerm && !vendor.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (filterCategory && vendor.category !== filterCategory) {
      return false;
    }
    if (filterDate && !vendor.availability.includes(filterDate)) {
      return false;
    }
    if (filterBudget) {
      const budgetNum = parseFloat(filterBudget);
      if (isNaN(budgetNum) || vendor.price > budgetNum) {
        return false;
      }
    }
    if (filterLocation && vendor.location !== filterLocation) {
      return false;
    }
    return true;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Vendors</h1>

      {/* Search and Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border rounded p-2 flex-grow min-w-[200px]"
        />
        <select
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="date"
          value={filterDate}
          onChange={e => setFilterDate(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="number"
          placeholder="Max Budget"
          value={filterBudget}
          onChange={e => setFilterBudget(e.target.value)}
          className="border rounded p-2"
        />
        <select
          value={filterLocation}
          onChange={e => setFilterLocation(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All Locations</option>
          {[...new Set(dummyVendors.map(v => v.location))].map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {filteredVendors.map(vendor => (
          <div
            key={vendor.id}
            className="border rounded p-4 cursor-pointer hover:shadow-lg"
            onClick={() => handleVendorClick(vendor.id)}
          >
            <div className="h-32 bg-gray-200 rounded mb-4" />
            <h2 className="text-xl font-semibold">{vendor.name}</h2>
            <p>Category: {vendor.category}</p>
            <p>Price: ₹{vendor.price}</p>
            <p>Rating: {vendor.rating}</p>
            <p>Location: {vendor.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorPage;
