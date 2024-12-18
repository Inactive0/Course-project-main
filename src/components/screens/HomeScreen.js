import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate импорттау
import TeacherRating from "../TeacherRating"; // TeacherRating компонентін импорттаймыз
import ImageSlider from "../Slider"; // Slider компонентін импорттаймыз

function HomeScreen({ onClickStart }) {
  const navigate = useNavigate(); // navigate hook-ты қолданамыз

  const handleStartMeeting = () => {
    navigate("/meeting"); 
    onClickStart(); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 space-y-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>

      {/* Слайдерді қосамыз */}
      <ImageSlider />

      <p className="text-lg text-center max-w-md">
        Join our online meetings, explore new courses, and connect with
        experts. Start your journey with us today!
      </p>
      <button
        onClick={handleStartMeeting} // Start meeting батырмасын басқан кезде жолды өзгерту
        className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-200 transition duration-300 shadow-lg"
      >
        Start Meeting
      </button>

      {/* Teacher Rating бөлімі */}
      <TeacherRating />
    </div>
  );
}

export default HomeScreen;
