import { useCallback, useMemo, useState } from "react";

const Home = ({ name }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1> {name} - Welcome to the Home Page</h1>
      <p>This is a simple React component demonstrating a home page.</p>
      <button onClick={handleIncrement}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Double: {doubleCount}</p>
    </div>
  );
};

export default Home;
