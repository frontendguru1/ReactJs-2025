import { useEffect } from "react";
import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;

    } catch (error) {
      console.log("Error while fetching local storage", error);
      return initialValue;
    }

  });

  // Update state variable
  useEffect(() => {
    try {
      console.log('storedValue', storedValue);

      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log("Error while saving data in localstorage", error);

    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue]
}

export default useLocalStorage;
