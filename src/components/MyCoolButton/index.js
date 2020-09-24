import React, { useState } from "react";
import "./style.css";

export const MyCoolButton = (props) => {
  const [commentHistory, setCommentHistory] = useState([]);
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount(count + 1);
    // alert(`Коммент хадгалах уу?  ${props.comment}`);
    setCommentHistory([...commentHistory, props.comment]);
  };
  // css.color = "red";
  return (
    <div>
      <span style={css}>
        {props.tovchNer ? props.tovchNer : "Үнэхээр лаг товч"}
      </span>{" "}
      <br />
      <input
        className="MyCoolButton"
        type="button"
        onClick={clickHandler}
        value={props.dar ? `${count})   ${props.dar}` : "Click me!"}
      />
      <div>
        {commentHistory.map((el) => (
          <div>{el}</div>
        ))}
      </div>
    </div>
  );
};

var css = {
  backgroundColor: "gray",
  color: "blue",
};
