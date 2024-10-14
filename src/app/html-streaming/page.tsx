import Image from "next/image";
import React, { Suspense } from "react";

import ComponentWithFetch from "@/components/ComponentWithFetch";
import HeavyComponent from "@/components/HeavyComponent";

const HTMLStreaming = async () => {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  const d = await fetch("https://jsonplaceholder.typicode.com/photos/3");

  const data = await new Promise((res) =>
    setTimeout(() => res(d.json()), 2000)
  );
  // (data) => setTimeout(async () => await data.json(), 2000)

  return (
    <div>
      <h1>Route Component /html-streaming</h1>
      <br />
      <Image
        width={100}
        height={100}
        src="https://picsum.photos/id/1/200/300"
        alt="alt"
      />
      <Suspense fallback={<div>loading component with fetch...</div>}>
        <ComponentWithFetch />
      </Suspense>
      <Suspense fallback={<div>loading heavy component...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};

export default HTMLStreaming;
