import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PaymentScreen({ selectedCourse = "General English" }) {
  const [formData, setFormData] = useState({
    name: "",
    englishLevel: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false); 
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentSuccess(true); 
    setTimeout(() => {
      navigate("/"); 
    }, 2000); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 text-gray-800">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
        {}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">
            Payment for: {selectedCourse}
          </h1>
        </div>

        {

        }
        <button
          onClick={() => navigate("/courses")} 
          className="mb-6 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          ⬅ Back
        </button>

        {}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {

            }
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {

            }
            <div>
              <label htmlFor="englishLevel" className="block text-sm font-medium text-gray-700">
                English Level
              </label>
              <select
                id="englishLevel"
                name="englishLevel"
                value={formData.englishLevel}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="" disabled>
                  Select your level
                </option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {}
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                maxLength={16}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {}
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                maxLength={5}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {

            }
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="password"
                id="cvv"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                maxLength={3}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>

            {

            }
            <div></div>
          </div>

          {
            
          }
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md shadow-md transition duration-300"
          >
            Confirm Payment
          </button>
        </form>

        {

        }
        {paymentSuccess && (
          <div className="mt-6 text-center text-xl text-green-500">
            Payment successful! Redirecting to Home...
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentScreen;
