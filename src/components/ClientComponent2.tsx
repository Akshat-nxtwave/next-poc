"use client";

import React from "react";
import ComponentWithFetch from "./ComponentWithFetch";

const ClientComponent2 = () => {
  const [title, setTitle] = React.useState("Abcd");
  return (
    <div>
      INCORRECT WAY OF USING ASYNC COMPONENTS
      <div>ClientComponent - {title}</div>
      <button onClick={() => setTitle((prev) => prev + "2")}>
        Change Title
      </button>
      <div>
        <ComponentWithFetch />
      </div>
    </div>
  );
};

export default ClientComponent2;
