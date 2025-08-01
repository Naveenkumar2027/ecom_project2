import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilterPanel } from "../components/FilterPanel";
import { CategoryTabs } from "../components/CategoryTabs";
import { ServiceCard } from "../components/ServiceCard";
import { AvailabilityModal } from "../components/AvailabilityModal";
import type { Vendor } from "../types";

const dummyVendors: Vendor[] = [
  { id: 1, name: "Lens & Light", rating: 4.5, price: 15000, category: "Photographers", availability: ["2025-08-05", "2025-08-10"] },
  { id: 2, name: "Delight Caterers", rating: 4.2, price: 20000, category: "Caterers", availability: ["2025-08-01", "2025-08-12"] },
  { id: 3, name: "Sacred Purohits", rating: 4.7, price: 12000, category: "Purohits", availability: ["2025-08-03", "2025-08-15"] },
  { id: 4, name: "Elegant Decor", rating: 4.3, price: 18000, category: "Decorators", availability: ["2025-08-07", "2025-08-20"] },
  { id: 5, name: "Shutter Pro", rating: 4.6, price: 16000, category: "Photographers", availability: ["2025-08-02", "2025-08-18"] },
  { id: 6, name: "Gourmet Caterers", rating: 4.1, price: 22000, category: "Caterers", availability: ["2025-08-04", "2025-08-22"] },
  { id: 7, name: "Vedic Purohits", rating: 4.4, price: 13000, category: "Purohits", availability: ["2025-08-06", "2025-08-25"] },
  { id: 8, name: "Floral Designs", rating: 4.0, price: 17000, category: "Decorators", availability: ["2025-08-08", "2025-08-28"] },
];

export default function ServicesPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Photographers");
  const [availabilityVendor, setAvailabilityVendor] = useState<Vendor | null>(null);
  const [filters, setFilters] = useState({
    budget: '',
    location: '',
    language: '',
    date: '',
    ratings: '',
  });

  const handleApplyFilters = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  const filteredVendors = dummyVendors.filter(vendor => {
    if (vendor.category !== selectedCategory) return false;

    if (filters.budget) {
      const budgetNum = parseFloat(filters.budget);
      if (isNaN(budgetNum) || vendor.price > budgetNum) return false;
    }

    if (filters.date) {
      if (!vendor.availability.includes(filters.date)) return false;
    }

    if (filters.ratings) {
      const ratingNum = parseFloat(filters.ratings);
      if (isNaN(ratingNum) || vendor.rating < ratingNum) return false;
    }

    return true;
  });

  const handleViewProfile = (vendor: Vendor) => {
    navigate(`/vendor/${vendor.id}`);
  };

  return (
    <div className="flex h-screen">
      <FilterPanel onApplyFilters={handleApplyFilters} />
      <div className="w-3/4 p-4 overflow-y-auto">
        <CategoryTabs selected={selectedCategory} setSelected={setSelectedCategory} />
        <div className="grid grid-cols-3 gap-4 mt-4">
          {filteredVendors.map(vendor => (
            <ServiceCard
              key={vendor.id}
              vendor={vendor}
              onViewProfile={handleViewProfile}
              onCheckAvailability={setAvailabilityVendor}
            />
          ))}
        </div>
      </div>
      {availabilityVendor && <AvailabilityModal vendor={availabilityVendor} onClose={() => setAvailabilityVendor(null)} />}
    </div>
  );
}