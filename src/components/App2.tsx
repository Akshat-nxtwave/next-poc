import { unstable_cache } from "next/cache";
import React from "react";

const App2 = async () => {
  const getDate = unstable_cache(
    async () => {
      return new Date().toUTCString();
    },
    ["current_date"],
    { revalidate: 60, tags: ["current_date"] }
  );
  return <h1>Date: {getDate()}</h1>;
};

export default App2;
