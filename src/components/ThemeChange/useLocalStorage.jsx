import React, { useEffect, useState } from "react";

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = localStorage.getItem(key || defaultValue);
      return currentValue;
    } catch (err) {
      console.log(err);
      currentValue = defaultValue;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);
  return [value, setValue];
}

export default useLocalStorage;
