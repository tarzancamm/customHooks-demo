import { useState, useEffect } from "react";

// Any component can take advantage of using useCounter's logic
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if (forwards) {
            setCounter((prevCounter) => prevCounter + 1);
        } else {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);

  return counter
};

export default useCounter;
