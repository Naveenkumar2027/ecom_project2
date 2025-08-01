import { useState } from "react";
import { FaHeart, FaChevronDown, FaStar } from "react-icons/fa";

const VendorProfilePage = () => {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top Section */}
      <div className="bg-white p-6 rounded shadow flex gap-10">
        {/* Vendor Image */}
        <div className="relative w-1/2">
          <div className="bg-gray-200 h-80 rounded" />
          <button className="absolute top-2 left-2 bg-white p-2 rounded-full shadow">
            <FaHeart className="text-gray-700" />
          </button>
        </div>

        {/* Vendor Info */}
        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-bold">Vendor 1</h2>
          <span className="inline-block bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
            Tag
          </span>
          <p className="text-3xl font-bold">₹200-500</p>
          <p className="text-gray-600">Description or service summary text.</p>

          {/* Dropdowns */}
          <div className="flex gap-4">
            <select className="border rounded p-2 w-1/2">
              <option>Value</option>
            </select>
            <select className="border rounded p-2 w-1/2">
              <option>Value</option>
            </select>
          </div>

          {/* Book Now Button */}
          <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
            Book Now
          </button>

          {/* FAQ Dropdown */}
          <div>
            <button
              className="w-full flex justify-between items-center bg-gray-100 px-4 py-2 rounded"
              onClick={() => setFaqOpen(!faqOpen)}
            >
              <span className="font-medium">Title</span>
              <FaChevronDown className={`transition-transform ${faqOpen ? "rotate-180" : ""}`} />
            </button>
            {faqOpen && (
              <div className="mt-2 bg-white p-4 border rounded text-sm text-gray-600">
                Answer the frequently asked question in a simple sentence,
                a longish paragraph, or even in a list.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Latest reviews</h3>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white p-4 rounded shadow">
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-sm" />
                ))}
              </div>
              <h4 className="mt-2 font-medium">Review title</h4>
              <p className="text-sm text-gray-600">Review body</p>
              <div className="flex items-center gap-2 mt-4">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="Reviewer"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-sm font-semibold">Reviewer name</p>
                  <p className="text-xs text-gray-500">Date</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorProfilePage;
