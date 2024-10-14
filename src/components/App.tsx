"use client";

import dynamic from "next/dynamic";
import React from "react";

// ssr: false => Not included in server side renderring (But by default it's always true)
const Lazy = dynamic(() => import("./LazyComponent"), { ssr: false });

const App = () => {
  return (
    <div>
      <div>App</div>
      <Lazy />
    </div>
  );
};

export default App;
