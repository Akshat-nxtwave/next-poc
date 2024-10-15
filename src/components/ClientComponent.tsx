"use client";

import React from "react";
import ComponentWithoutFetch from "./ComponentWithoutFetch";
const ClientComponent = ({ children }: { children?: React.ReactNode }) => {
  const [title, setTitle] = React.useState("Abc");
  return (
    <div>
      ClientComponent - {title}
      <button onClick={() => setTitle((prev) => prev + "A")}>
        Change Title
      </button>
      <div>
        Server Component as child - <div>{children}</div>
      </div>
      <div>
        <ComponentWithoutFetch />
      </div>
    </div>
  );
};

export default ClientComponent;
