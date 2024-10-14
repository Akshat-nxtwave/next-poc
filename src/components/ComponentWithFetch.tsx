import React from "react";

const ComponentWithFetch = async () => {
  const d = await fetch("https://jsonplaceholder.typicode.com/posts/5", {
    next: { revalidate: 10 },
  });
  const data = await d.json();
  // mocking fetch time
  await new Promise((res) =>
    setTimeout(() => {
      res(true);
    }, 2000)
  );
  return (
    <div
      style={{
        border: "1px solid #116655",
        margin: "20px 0",
        padding: "20px",
      }}
    >
      <h3>{data?.title}</h3>
      <h4>{"HI FROM SERVER COMPONENT WITH FETCH"}</h4>
    </div>
  );
};

export default ComponentWithFetch;
