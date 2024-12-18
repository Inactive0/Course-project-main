import React from "react";

import avatar1 from "../../images/avatar1.png";
import avatar2 from "../../images/avatar2.png";
import avatar3 from "../../images/avatar3.png";

function StudentReviewsScreen() {
  const reviews = [
    {
      name: "Alice Johnson",
      time: "15 minutes ago",
      comment:
        "This English course is exceptional! The lessons are well-structured, and the instructors are very professional. They really care about your progress. I’ve learned so much in a short amount of time, and I’m excited to continue my learning journey.",
      rating: 5,
      avatar: avatar1,
    },
    {
      name: "James Smith",
      time: "1 hour ago",
      comment:
        "The course is very engaging and interactive. The instructors make learning fun and easy to understand. They provide plenty of resources and practice opportunities. I’ve noticed a huge improvement in my speaking and listening skills!",
      rating: 5,
      avatar: avatar2,
    },
    {
      name: "Sophia Lee",
      time: "2 days ago",
      comment:
        "I’ve been attending this English course for a few weeks, and I am really impressed by the quality of teaching. The classes are not only informative but also enjoyable. The instructors are patient and always willing to help you out. Highly recommend!",
      rating: 5,
      avatar: avatar3,
    },
    {
      name: "Michael Brown",
      time: "12 days ago",
      comment:
        "I’ve tried several English courses, but this one stands out. The teaching methods are very effective, and the course materials are up-to-date. The instructors are friendly and approachable, making it easy to ask questions and get support. I feel more confident speaking English now.",
      rating: 5,
      avatar: avatar1,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex flex-col items-center p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <p className="text-lg font-semibold text-gray-800">{review.name}</p>
                <p className="text-sm text-gray-500">{review.time}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4">{review.comment}</p>
            <div className="flex items-center">
              { 
              }
              {[...Array(review.rating)].map((_, starIndex) => (
                <svg
                  key={starIndex}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.28 3.933a1 1 0 00.95.69h4.133c.969 0 1.371 1.24.588 1.81l-3.347 2.428a1 1 0 00-.364 1.118l1.28 3.933c.3.921-.755 1.688-1.54 1.118l-3.347-2.428a1 1 0 00-1.176 0l-3.347 2.428c-.785.57-1.841-.197-1.54-1.118l1.28-3.933a1 1 0 00-.364-1.118L2.74 9.36c-.783-.57-.38-1.81.588-1.81h4.133a1 1 0 00.95-.69l1.28-3.933z" />
                </svg>
              ))}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentReviewsScreen;
