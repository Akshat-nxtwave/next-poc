"use client";

import { SessionProvider, useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import React from "react";

// ssr: false => Not included in server side renderring (But by default it's always true)
const Lazy = dynamic(() => import("./LazyComponent"), { ssr: false });

const App = () => {
  return (
    <SessionProvider>
      <div>
        <div>App</div>
        <Lazy />
      </div>
    </SessionProvider>
  );
};

export default App;
