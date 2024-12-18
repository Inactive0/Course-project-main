import React from "react";
import { useNavigate } from "react-router-dom";

import MembershipImage from "../../images/membership.jpg";
import CertificateImage from "../../images/certificate.jpg";
import MentorImage from "../../images/mentor.png";
import User1Image from "../../images/user1.jpg";
import User2Image from "../../images/user2.jpg";
import User3Image from "../../images/user3.jpg";

function AboutScreen() {
  const navigate = useNavigate(); // Навигация үшін хук

  return (
    <div className="flex flex-col items-center p-6">
      {}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose Future Forge for English Learning?</h2>
      <p className="text-gray-600 text-center mb-8">
        Master the art of English communication with our comprehensive courses tailored for all levels.
      </p>

      {/* Карточкалар бөлімі */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Get Certificate карточкасы */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <img src={MembershipImage} alt="Membership" className="w-20 h-20" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Earn a Certificate</h3>
          <p className="text-gray-600 text-center mt-2">
            Receive an official certificate upon completing your English course to showcase your proficiency.
          </p>
        </div>

        {/* Get Membership карточкасы */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <img src={CertificateImage} alt="Certificate" className="w-20 h-20" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Join Our Membership</h3>
          <p className="text-gray-600 text-center mt-2">
            Enjoy exclusive benefits, including additional resources and live practice sessions, as a member.
          </p>
        </div>

        {/* Become a Mentor карточкасы */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            <img src={MentorImage} alt="Mentor" className="w-20 h-20" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Become a Mentor</h3>
          <p className="text-gray-600 text-center mt-2">
            Complete our advanced courses and share your knowledge by becoming a mentor for new learners.
          </p>
        </div>
      </div>

      {/* Жаңа секция */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-100 p-6 rounded-lg shadow-lg mt-8">
        {/* Сол жақ бөлігі */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">1K+ Skilled English Mentors</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <img src={User1Image} alt="Ashton Agar" className="w-8 h-8 rounded-full" />
              <p>Ashton Agar</p>
              <span className="text-green-500">★★★★★</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={User2Image} alt="Ros Tylor" className="w-8 h-8 rounded-full" />
              <p>Ros Tylor</p>
              <span className="text-green-500">★★★★☆</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src={User3Image} alt="Jacob William" className="w-8 h-8 rounded-full" />
              <p>Jacob William</p>
              <span className="text-green-500">★★★★★</span>
            </div>
          </div>
          <div className="text-gray-600 text-sm">100+ Speaking Experts</div>
        </div>

        {/* Оң жақ бөлігі */}
        <div className="flex flex-col items-start md:ml-8">
          <h3 className="text-2xl font-bold text-gray-800">Learn from the Best English Instructors</h3>
          <p className="text-gray-600 mt-2 mb-4">
            Gain fluency in English with lessons taught by world-renowned teachers and linguists.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Personalized guidance</li>
            <li>Interactive language practice</li>
          </ul>
          <button
            className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg"
            onClick={() => navigate("/student-reviews")} // Навигация батырмасы
          >
            Reviews
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutScreen;
