import React, { useState } from "react";
import styles from "./Habit.module.css";
import CustomList from "./Display";
export default function Habit() {

  const [set, setData] = useState({
    Where: "",
    Why: "",
    What: "",
    date: "", // Changed from 'data' to 'date'
    id : ""
  });
  const [display, setDisplay] = useState([]);

  const handleChange = (value, key) => {
    setData({ ...set, [key] : value,id : Math.random()
    });

    // console.log({key, value})

    // setData({ ...set, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setDisplay([...display, set]);
    setData({
      Where: "",
      Why: "",
      What: "",
      date: "",
      id : "" // Resetting form fields after submission
    });
  }
  const handleDelete = (itemId) => {
    console.log({itemId, display})
    const updateDisplay = display.filter((item) => item?.id !== itemId);
    // 
    // splice(where to start, how much to delete, what to add)
    setDisplay(updateDisplay);
  };

  return (
    <>
      <div className={styles.body}>
        <div>
          <input
            type="text"
            placeholder="What to do"
            onChange={
              (e) => handleChange(e.target.value, 'What')
            }
            value={set.What}
          />
          <input
            type="text"
            placeholder="Where to do"
            onChange={
              (e) => handleChange(e.target.value, 'Where')
            }
            value={set.Where}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Why to do"
            onChange={
              (e) => handleChange(e.target.value, 'Why')
            }
            value={set.Why}
          />
          <input
            type="date"
            onChange={
              (e) => handleChange(e.target.value, 'date')
            }
            value={set.date}
          />
          <button className={styles.save} type="submit" onClick={handleSubmit}>
            Save
          </button>
        </div>

        <div>
          {/* <ul>
          {display.map((item, index) => (
            <li key={index}>
              <div> {item.What}</div>
              <div> {item.Where}</div>
              <div>{item.Why}</div>
              <div> {item.date}</div>
            </li>
          ))}
        </ul> */}
          {display?.map((data, index) => (
            <CustomList listData={data} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
}
