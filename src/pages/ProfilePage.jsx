import React, { useState } from "react";
import "../components/css/profile.css";

function ProfilePage() {
  const [name, setName] = useState("John Doe");
  const [age, setAge] = useState(30);
  const [email, setEmail] = useState("johndoe@example.com");
  const [photo, setPhoto] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nAge: ${age}\nEmail: ${email}\nPhoto: ${photo}`);
  };

  return (
    <div className="profile">
      <div className="profile__left">
        <img src={photo} alt="Profile" className="profile__photo" />
        <input
          type="file"
          onChange={handlePhotoChange}
          className="profile__photo-input"
        />
      </div>
      <div className="profile__right">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Age:
            <input type="number" value={age} onChange={handleAgeChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}


export default ProfilePage;
