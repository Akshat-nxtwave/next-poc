import { cookies } from "next/headers";
import React from "react";

const Page = () => {
  const { getAll } = cookies();

  return (
    <div>
      <div>Dynamic(on-demand) Page - </div>
      <div>
        <strong> {new Date().toISOString()}</strong>
      </div>
      <div>{JSON.stringify(getAll())}</div>
    </div>
  );
};

export default Page;
