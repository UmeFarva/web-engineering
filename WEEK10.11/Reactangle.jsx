import React from "react";

const Rectangle = () => {
  const ok = { sahi: "its fine" };
  return (
    <div
      style={{
        width: "100px",
        height: "50px",
        backgroundColor: "aqua",
      }}
    >
      {JSON.stringify(ok)}
    </div>
  );
};

export default Rectangle;
