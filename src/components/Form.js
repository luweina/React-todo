import React, { useState, useEffect } from "react";

function Form(props) {
  const [name, setName] = useState('');




  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName("");

  }



  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        placeholder="Enter somethings"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button data-testid = "hi" type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
