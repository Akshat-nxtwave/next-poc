import React from "react";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <h1>Intercepting Routes Layout -</h1>
      <div>{children}</div>
    </>
  );
};

export default Layout;
