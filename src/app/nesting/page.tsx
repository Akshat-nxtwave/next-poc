import ClientComponent from "@/components/ClientComponent";
import ComponentWithFetch from "@/components/ComponentWithFetch";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Nesting of server & client</h1>
      <hr />
      <ClientComponent>
        <ComponentWithFetch />
      </ClientComponent>
    </div>
  );
};

export default Page;
