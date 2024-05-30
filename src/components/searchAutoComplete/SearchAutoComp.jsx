import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";
import "./style.css";

function SearchAutoComp() {
  const [users, setUsers] = useState([]);
  const [inputRange, setInputRange] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const handleSingleItemClick = (el) => {
    setInput(el.firstName);
    setInputRange([]);
  };

  const handleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setInput(query);
    if (query && query.length > 0) {
      const range = users.filter((el, i) => {
        return el.firstName.toLowerCase().indexOf(query) > -1;
      });
      setInputRange(range);
    } else {
      setInputRange([]);
    }
  };

  const fetchAllUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/users?limit=100`);
      const data = await response.json();
      setUsers(data.users);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <div className="globalContenair">
      {loading && <p>Loading..!please wait..</p>}
      <input type="text" onChange={handleChange} value={input} />
      <Suggestion data={inputRange} fn={handleSingleItemClick} />
    </div>
  );
}

export default SearchAutoComp;
