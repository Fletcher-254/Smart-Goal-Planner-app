import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center p-4 mt-10">
      <p>&copy; {new Date().getFullYear()} Smart Goal Planner. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
