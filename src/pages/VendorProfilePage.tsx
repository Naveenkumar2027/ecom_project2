import React, { useState } from 'react';

const VendorProfilePage = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'about'>('about');

  // Placeholder data
  const vendor = {
    name: 'Jeremy Rose',
    location: 'New York, NY',
    role: 'Product Designer',
    rankings: 8.6,
    profileImage: 'https://randomuser.me/api/portraits/men/75.jpg',
    work: [
      { company: 'Spotify New York', address: '170 William Street New York, NY 10038-78 212-312-51', type: 'Primary' },
      { company: 'Metropolitan Museum', address: '525 E 68th Street New York, NY 10651-78 156-187-60', type: 'Secondary' },
    ],
    skills: ['Branding', 'UI/UX', 'Web - Design', 'Packaging', 'Print & Editorial'],
    contact: {
      phone: '+1 123 456 7890',
      address: '525 E 68th Street New York, NY 10651-78 156-187-60',
      email: 'hello@jeremyrose.com',
      site: 'www.jeremyrose.com',
    },
    basicInfo: {
      birthday: 'June 5, 1992',
      gender: 'Male',
    },
  };

  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar */}
        <div className="bg-gray-50 p-6 w-full md:w-1/3 flex flex-col items-center md:items-start">
          <img
            src={vendor.profileImage}
            alt={vendor.name}
            className="w-32 h-32 rounded-full object-cover mb-6"
          />
          <div className="w-full">
            <h3 className="text-gray-500 uppercase text-xs mb-2">Work</h3>
            {vendor.work.map((job, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold">{job.company}</h4>
                  <span
                    className={`text-xs px-2 py-0.5 rounded ${
                      job.type === 'Primary' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{job.address}</p>
              </div>
            ))}
            <h3 className="text-gray-500 uppercase text-xs mb-2 mt-6">Skills</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              {vendor.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 w-full md:w-2/3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold">{vendor.name}</h1>
              <p className="text-gray-500">{vendor.role} <span className="ml-2 text-gray-400">• {vendor.location}</span></p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="text-center">
                <p className="text-3xl font-bold">{vendor.rankings.toFixed(1)}</p>
                <p className="text-sm text-gray-500">Rankings</p>
              </div>
              <button className="bg-gray-100 px-4 py-2 rounded flex items-center space-x-2 text-gray-700 hover:bg-gray-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/></svg>
                <span>Send message</span>
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Contacts
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                Report user
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('timeline')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'timeline' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Timeline
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'about' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                About
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === 'about' && (
            <div>
              <h3 className="text-gray-500 uppercase text-xs mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold">Phone:</p>
                  <p className="text-blue-600 cursor-pointer">{vendor.contact.phone}</p>
                </div>
                <div>
                  <p className="font-semibold">Address:</p>
                  <p>{vendor.contact.address}</p>
                </div>
                <div>
                  <p className="font-semibold">E-mail:</p>
                  <p className="text-blue-600 cursor-pointer">{vendor.contact.email}</p>
                </div>
                <div>
                  <p className="font-semibold">Site:</p>
                  <p className="text-blue-600 cursor-pointer">{vendor.contact.site}</p>
                </div>
              </div>

              <h3 className="text-gray-500 uppercase text-xs mt-8 mb-4">Basic Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold">Birthday:</p>
                  <p>{vendor.basicInfo.birthday}</p>
                </div>
                <div>
                  <p className="font-semibold">Gender:</p>
                  <p>{vendor.basicInfo.gender}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div>
              <p className="text-gray-500">Timeline content goes here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorProfilePage;
