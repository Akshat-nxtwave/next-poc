import ClientComponent from "@/components/ClientComponent";
import ClientComponent2 from "@/components/ClientComponent2";
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
      <hr />
      <div>
        <ClientComponent2 />
      </div>
    </div>
  );
};

export default Page;
