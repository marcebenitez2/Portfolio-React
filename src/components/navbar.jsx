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
      <div className="flex items-center gap-2 smn:gap-2">
        <h1 className="text-3xl navbar_name w-60 animate-fade-down animate-delay-300 smn:text-lg smn:w-fit">
          OPEN TO WORK
        </h1>
        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animate-infinite"></div>
      </div>
      <span className="text-3xl navbar_name w-36 animate-fade-down animate-delay-300 smn:w-fit mdn:text-xl">
        {time}
      </span>
    </div>
  );
}

export default Navbar;
