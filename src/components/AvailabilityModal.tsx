import type { Vendor } from "../types";

type Props = {
  vendor: Vendor;
  onClose: () => void;
};

export const AvailabilityModal = ({ vendor, onClose }: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded max-w-md w-full space-y-4">
        <h2 className="text-xl font-bold">Availability of {vendor.name}</h2>
        <ul className="list-disc ml-4">
          {vendor.availability.map((date, index) => <li key={index}>{date}</li>)}
        </ul>
        <button onClick={onClose} className="text-red-500">Close</button>
      </div>
    </div>
  );
};
