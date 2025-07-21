import React from "react";

function Footer() {
  return (
    <footer className="text-center text-sm py-4 text-gray-500 border-t mt-10">
      © {new Date().getFullYear()} SmartGoal Planner.
    </footer>
  );
}

export default Footer;
