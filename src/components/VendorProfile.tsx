import type { Vendor } from "../types";

type Props = {
  vendor: Vendor;
  onClose: () => void;
};

export const VendorProfile = ({ vendor, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded max-w-md w-full space-y-4">
        <h2 className="text-xl font-bold">{vendor.name}</h2>
        <p>Rating: {vendor.rating}</p>
        <p>Price: ₹{vendor.price}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Book Now
        </button>
        <button onClick={onClose} className="text-red-500 mt-2">Close</button>
      </div>
    </div>
  );
};
