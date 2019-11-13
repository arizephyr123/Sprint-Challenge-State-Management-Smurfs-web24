import React from "react";
import useInput from "../hooks/useInput";

const SmurfForm = props => {
  console.log(props);
  const [name, setName, handleNewName] = useInput("");
  const [age, setAge, handleNewAge] = useInput("");
  const [height, setHeight, handleNewHeight] = useInput("");

  const newSmurfObj = {
    name: name,
    age: age,
    height: height,
    id: Date.now()
  };

  const handleSubmit = e => {
    e.preventDefault();
    setName("");
    setAge("");
    setHeight("");
  };

  return (
    <form className="add-smurf-form" onSubmit={handleSubmit}>
      Enter A New Smurf!
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="text-input"
          id="name"
          name="name"
          onChange={e => handleNewName(e.target.value)}
          placeholder="Enter Name"
          type="text"
          value={name}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          className="text-input"
          id="age"
          name="age"
          onChange={e => handleNewAge(e.target.value)}
          placeholder="Enter Age"
          type="text"
          value={age}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          className="text-input"
          id="height"
          name="height"
          onChange={e => handleNewHeight(e.target.value)}
          placeholder="Enter Height"
          type="text"
          value={height}
        />
      </div>
      <button
        className="add-new-btn"
        onClick={() => props.addNewSmurf(newSmurfObj)}
      >
        Add New Smurf
      </button>
    </form>
  );
};

export default SmurfForm;
