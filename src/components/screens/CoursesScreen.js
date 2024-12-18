import React from "react";
import { useNavigate } from "react-router-dom";

import GeneralEnglishImage from "../../images/general.png";
import ClassicEnglishImage from "../../images/classic.png";
import BusinessEnglishImage from "../../images/business.png";

function CoursesScreen() {
  const navigate = useNavigate();

  const handleLearnMore = (course) => {
    // Берілген курсқа байланысты төлем бетіне жіберу
    navigate(`/payment?course=${course}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 text-gray-800 flex flex-col items-center p-6">
      {/* Header */}
      <header className="py-8">
        <h1 className="text-4xl font-bold text-indigo-600">Find a Course</h1>
        <p className="mt-2 text-lg text-center text-gray-700">Featured Courses</p>
      </header>

      {/* Courses */}
      <section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* General English */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <img
            src={GeneralEnglishImage}
            alt="General English"
            className="rounded-md w-full"
          />
          <h3 className="text-xl font-semibold text-indigo-600">General English</h3>
          <p className="text-sm text-gray-700">
            Improve your communication skills with comprehensive lessons covering grammar, vocabulary, and real-life situations.
          </p>
          <button
            onClick={() => handleLearnMore("General English")}
            className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600 transition duration-300"
          >
            Buy now
          </button>
        </div>

        {/* Classic English */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <img
            src={ClassicEnglishImage}
            alt="Classic English"
            className="rounded-md w-full"
          />
          <h3 className="text-xl font-semibold text-indigo-600">Classic English</h3>
          <p className="text-sm text-gray-700">
            Master the timeless art of the English language with classic literature, poetry, and advanced linguistic techniques.
          </p>
          <button
            onClick={() => handleLearnMore("Classic English")}
            className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600 transition duration-300"
          >
            Buy now
          </button>
        </div>

        {/* Business English */}
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <img
            src={BusinessEnglishImage}
            alt="Business English"
            className="rounded-md w-full"
          />
          <h3 className="text-xl font-semibold text-indigo-600">Business English</h3>
          <p className="text-sm text-gray-700">
            Enhance your professional communication with specialized lessons for meetings, presentations, and business correspondence.
          </p>
          <button
            onClick={() => handleLearnMore("Business English")}
            className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md shadow-md hover:bg-indigo-600 transition duration-300"
          >
            Buy now
          </button>
        </div>
      </section>
    </div>
  );
}

export default CoursesScreen;
