import React, { useState } from "react";

const GoalForm = () => {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Goal:", goal);
    setGoal("");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Create a Smart Goal</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Goal</label>
          <input
            type="text"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Write your goal here"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Save Goal
        </button>
      </form>
    </div>
  );
};

export default GoalForm;
