import React from "react";

function TeacherDetail({ teacher, onBack }) {
  if (!teacher) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-300 text-gray-800 p-6 w-full">
      <button 
        onClick={onBack} 
        className="mb-6 px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-lg transition-all duration-300"
      >
        Back
      </button>
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full text-center mx-0">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Teacher Detail</h1>
        <p className="text-xl font-semibold text-gray-700 mb-2">Level: <span className="text-indigo-500">{teacher.level}</span></p>
        <p className="text-xl font-semibold text-gray-700 mb-4">Name: <span className="text-indigo-500">{teacher.name}</span></p>
        <img 
          src={teacher.image} 
          alt={teacher.name} 
          className="w-24 h-24 rounded-full mb-6 border-4 border-indigo-300 shadow-lg"
        />
        <div className="flex justify-center mb-4">
          {Array.from({ length: teacher.rating }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-3xl">★</span>
          ))}
        </div>
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-2">Meet Time</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-lg">Start Time (Almaty Time): Nov 12, 2024, 11:00 AM</p>
              <span className="text-xl">➔</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-lg">Start Time (Almaty Time): Nov 12, 2024, 14:00 PM</p>
              <span className="text-xl">➔</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDetail;
