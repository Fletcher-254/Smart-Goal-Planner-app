import React from "react";

function Profile() {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "I'm working on improving my productivity and reaching my goals!",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Profile</h2>

      <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "300px" }}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
      </div>
    </div>
  );
}

export default Profile;
