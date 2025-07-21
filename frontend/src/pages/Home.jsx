import React, { useState, useEffect } from "react";
import { saveToLocalStorage, loadFromLocalStorage } from "../utils/localStorage";

const Home = () => {
  const [goal, setGoal] = useState("");

  useEffect(() => {
    const savedGoal = loadFromLocalStorage("goal");
    if (savedGoal) {
      setGoal(savedGoal);
    }
  }, []);

  const handleChange = (e) => {
    setGoal(e.target.value);
    saveToLocalStorage("goal", e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Set Your SMART Goal</h2>
      <input
        type="text"
        value={goal}
        onChange={handleChange}
        placeholder="Type your goal here..."
        className="w-full border border-gray-300 rounded px-3 py-2"
      />
    </div>
  );
};

export default Home;
