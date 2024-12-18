import React, { useState, useEffect } from "react";

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem("user")) || {
    name: "John Doe",
    email: "johndoe@example.com",
    avatar: "https://via.placeholder.com/150",
  };

  const [user, setUser] = useState(storedUser);
  const [previewAvatar, setPreviewAvatar] = useState(user.avatar);
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setPreviewAvatar(user.avatar);
  }, [user]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreviewAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    const updatedUser = { ...user, avatar: previewAvatar };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser)); // Save to localStorage
    setIsEditing(false);
    setSaved(true);

    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 text-gray-800 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          {/* Avatar */}
          <img
            src={previewAvatar}
            alt="User Avatar"
            className="w-32 h-32 rounded-full shadow-lg mb-4"
          />
          {isEditing && (
            <label
              htmlFor="avatarUpload"
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-600 mb-4"
            >
              Change Avatar
            </label>
          )}
          <input
            type="file"
            id="avatarUpload"
            accept="image/*"
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>

        {/* Name */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          {isEditing ? (
            <input
              type="text"
              value={user.name}
              onChange={(e) =>
                setUser((prevUser) => ({ ...prevUser, name: e.target.value }))
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-gray-700"
            />
          ) : (
            <p className="text-gray-800">{user.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          {isEditing ? (
            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser((prevUser) => ({ ...prevUser, email: e.target.value }))
              }
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-gray-700"
            />
          ) : (
            <p className="text-gray-800">{user.email}</p>
          )}
        </div>

        {/* Buttons */}
        {isEditing ? (
          <button
            onClick={handleSaveProfile}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Save Profile
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Edit Profile
          </button>
        )}

        {/* Saved notification */}
        {saved && (
          <div className="mt-4 bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow">
            Profile saved successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
