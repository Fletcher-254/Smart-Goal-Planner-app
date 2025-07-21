import React, { useState, useEffect } from "react";

function Dashboard() {
  const [goals, setGoals] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedGoals = localStorage.getItem("goals");
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

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
        completed: false,
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

  const toggleComplete = (id) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    );
    setGoals(updatedGoals);
  };

  const filteredGoals = goals.filter((goal) => {
    if (filter === "completed") return goal.completed;
    if (filter === "incomplete") return !goal.completed;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">Dashboard</h1>

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
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Your Current Goals</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-md ${
                filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("completed")}
              className={`px-3 py-1 rounded-md ${
                filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter("incomplete")}
              className={`px-3 py-1 rounded-md ${
                filter === "incomplete" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              Incomplete
            </button>
          </div>
        </div>

        {filteredGoals.length === 0 ? (
          <p className="text-gray-600">No goals found.</p>
        ) : (
          <ul className="space-y-4">
            {filteredGoals.map((goal) => (
              <li
                key={goal.id}
                className="border border-gray-200 p-4 rounded-md flex justify-between items-start"
              >
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={goal.completed}
                    onChange={() => toggleComplete(goal.id)}
                    className="mt-1"
                  />
                  <div>
                    <h3
                      className={`text-md font-bold ${
                        goal.completed ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {goal.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        goal.completed ? "line-through text-gray-400" : ""
                      }`}
                    >
                      {goal.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleEdit(goal)}
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(goal.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
