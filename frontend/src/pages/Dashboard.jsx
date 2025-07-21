import React, { useState, useEffect } from "react";

function Dashboard() {
  const [goals, setGoals] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Load goals from localStorage
  useEffect(() => {
    const storedGoals = localStorage.getItem("goals");
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  // Save goals to localStorage when they change
  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    if (editingId) {
      const updatedGoals = goals.map((goal) =>
        goal.id === editingId ? { ...goal, title, description } : goal
      );
      setGoals(updatedGoals);
      setEditingId(null);
    } else {
      const newGoal = {
        id: Date.now(),
        title,
        description,
      };
      setGoals([newGoal, ...goals]);
    }

    setTitle("");
    setDescription("");
  };

  const handleDelete = (id) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
  };

  const handleEdit = (goal) => {
    setEditingId(goal.id);
    setTitle(goal.title);
    setDescription(goal.description);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">Dashboard</h1>

      {/* Add/Edit Form */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">
          {editingId ? "Edit Goal" : "Add a New Goal"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Goal Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
          <textarea
            placeholder="Goal Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          ></textarea>
          <div className="flex space-x-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              {editingId ? "Update Goal" : "Add Goal"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null);
                  setTitle("");
                  setDescription("");
                }}
                className="bg-gray-400 tex
