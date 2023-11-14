import React, { useState, useEffect } from "react";

function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("default", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      });
      setTime(formatter.format(now));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-16 flex items-center justify-between text-white">
      <h1 className="text-3xl navbar_name w-36 animate-fade-down animate-delay-300">BENITEZ</h1>
      <div className="w-24 h-4 border-t-2 border-b-2"></div>
      <span className="text-3xl navbar_name w-36 animate-fade-down animate-delay-300">{time}</span>
    </div>
  );
}

export default Navbar;