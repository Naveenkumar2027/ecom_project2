import type { Vendor } from "../types";

type Props = {
  vendor: Vendor;
  onViewProfile: (vendor: Vendor) => void;
  onCheckAvailability: (vendor: Vendor) => void;
};

export const ServiceCard = ({ vendor, onViewProfile, onCheckAvailability }: Props) => (
  <div className="p-4 border rounded shadow space-y-2">
    <div className="h-24 bg-gray-200 rounded mb-2" />
    <div className="font-bold">{vendor.name}</div>
    <div>Rating: {vendor.rating}</div>
    <div>Price: ₹{vendor.price}</div>
    <div className="flex gap-2">
      <button onClick={() => onViewProfile(vendor)} className="bg-blue-500 text-white px-2 py-1 rounded">
        View Profile
      </button>
      <button onClick={() => onCheckAvailability(vendor)} className="bg-green-500 text-white px-2 py-1 rounded">
        Availability
      </button>
    </div>
  </div>
);
