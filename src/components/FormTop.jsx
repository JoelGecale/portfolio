import React from "react";

const FormTop = () => {
  const shades = ["#D6E6F5", "#5A768D", "#143556"];

  return (
    <div className="form-top fixed-top">
      {shades.map((shade) => (
        <div className="round" style={{ "--shade":shade}}></div>
      ))}
    </div>
  );
};

export default FormTop;
