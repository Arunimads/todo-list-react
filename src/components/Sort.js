import React from "react";

export const Sort = ({ label, handleClick, id }) => {
  return (
    <>
      <input type="radio" name="order" id={id} onClick={handleClick} />
      <label for={label}>{label}</label>
    </>
  );
};
