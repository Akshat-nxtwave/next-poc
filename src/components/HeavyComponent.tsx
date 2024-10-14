import React from "react";

const HeavyComponent = async () => {
  await new Promise((res) =>
    setTimeout(() => {
      res(true);
    }, 800)
  );
  return (
    <div
      style={{
        border: "1px solid #ff6655",
        margin: "20px 0 ",
        padding: "20px",
      }}
    >
      <h4>{"Some Heavy Component"}</h4>
    </div>
  );
};

export default HeavyComponent;
