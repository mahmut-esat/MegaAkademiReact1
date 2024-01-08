import React from "react";

const TodoItem = (props) => {
  return (
    <div className="my-2 mx-3 ">
      <div class="p-3 bg-danger text-white d-flex justify-content-start align-items-center">
        <input type="checkbox" onChange={() => props.completed(props.id)} />
        <p className="">{props.item}</p>
      </div>
    </div>
  );
};

export default TodoItem;
