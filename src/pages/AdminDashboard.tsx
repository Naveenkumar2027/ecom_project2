import React, { useState, useRef, type ChangeEvent } from 'react';

const AdminDashboard = () => {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProfileClick = () => {
    setShowOptions(!showOptions);
  };

  const handleAddPhoto = () => {
    setShowOptions(false);
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemovePhoto = () => {
    setProfilePhoto(null);
    setShowOptions(false);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4 border-r">
        <div className="flex flex-col items-center mb-6 relative">
          <div
            className="w-20 h-20 rounded-full bg-purple-300 flex items-center justify-center text-white text-3xl cursor-pointer overflow-hidden"
            onClick={handleProfileClick}
          >
            {profilePhoto ? (
              <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              'A'
            )}
          </div>
          <h2 className="mt-2 font-semibold text-lg">Admin</h2>

          {showOptions && (
            <div className="absolute top-20 bg-white border rounded shadow-md w-40 z-10">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                onClick={handleAddPhoto}
              >
                Add profile photo
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                onClick={handleRemovePhoto}
              >
                Remove profile photo
              </button>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
        {/* Add sidebar navigation items here if needed */}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-white">
        <div className="grid grid-cols-1 gap-6">
          <section className="bg-gray-300 p-4 rounded shadow">
            <h3 className="font-semibold mb-2">New Requests</h3>
            {/* Content for new requests */}
            <div className="h-24 bg-gray-200 rounded"></div>
          </section>

          <section className="bg-gray-300 p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Verified Requests</h3>
            {/* Content for verified requests */}
            <div className="h-48 bg-gray-200 rounded"></div>
          </section>

          <div className="grid grid-cols-2 gap-6">
            <section className="bg-gray-300 p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Payment Related</h3>
              {/* Content for payment related */}
              <div className="h-24 bg-gray-200 rounded"></div>
            </section>

            <section className="bg-gray-300 p-4 rounded shadow">
              <h3 className="font-semibold mb-2">Analytics</h3>
              {/* Content for analytics */}
              <div className="h-48 bg-gray-200 rounded"></div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
