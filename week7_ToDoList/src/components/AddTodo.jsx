import React, { useState } from "react";

const AddTodo = (props) => {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.item(item);
  };

  return (
    <div className="container ">
      
      <form method="post" className="d-flex flex-row" onSubmit={handleSubmit}>
        <input
          type="text"
          name="item"
          className="form-control "
          value={item}
          onChange={handleChange}
          placeholder="Yapılacaklar listem"
        />
        <button
          className="btn btn-danger w-25"
          type="submit"
          id="button-addon2"
      
        >
          Ekle
        </button>
      </form>
      </div>
  );
};

export default AddTodo;
