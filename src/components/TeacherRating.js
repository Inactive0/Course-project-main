import React, { useState } from "react";
import TeacherDetail from "./TeacherDetail";

function TeacherRating() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const teachers = [
    { level: "A1", name: "Teacher1", image: "https://via.placeholder.com/150", rating: 5 },
    { level: "A2", name: "Teacher2", image: "https://via.placeholder.com/150", rating: 5 },
    { level: "B1", name: "Teacher3", image: "https://via.placeholder.com/150", rating: 5 },
    { level: "B2", name: "Teacher4", image: "https://via.placeholder.com/150", rating: 5 },
    { level: "C1", name: "Teacher5", image: "https://via.placeholder.com/150", rating: 5 },
    { level: "C2", name: "Teacher6", image: "https://via.placeholder.com/150", rating: 5 },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }).map((_, index) => (
      <span key={index} className="text-yellow-500">★</span>
    ));
  };

  if (selectedTeacher) {
    return <TeacherDetail teacher={selectedTeacher} onBack={() => setSelectedTeacher(null)} />;
  }

  return (
    <div className="bg-gray-100 w-full flex flex-col items-center py-8 mt-8 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Teachers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            onClick={() => setSelectedTeacher(teacher)} // мұғалімді таңдайды
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center w-48 cursor-pointer"
          >
            <h3 className="text-xl font-bold mb-2">{teacher.level}</h3>
            <img src={teacher.image} alt={teacher.name} className="w-16 h-16 rounded-full mb-2" />
            <p className="text-gray-700">{teacher.name}</p>
            <div className="flex">{renderStars(teacher.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherRating;
