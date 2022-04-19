import React, { useState } from "react";

const TestingPorpoises = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.data,
    });
  };

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        value={formData.name}
        className="name"
        onChange={handleFormChange}
      />
    </div>
  );
};

export default TestingPorpoises;
