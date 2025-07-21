import React from "react";

const Login = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Enter your password"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
