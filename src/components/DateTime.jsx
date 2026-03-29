import { useEffect, useState } from "react";

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatted = time.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).toUpperCase();

  return (
    <span className="block text-gray-400 mb-1">
      {formatted}
    </span>
  );
};

export default DateTime;