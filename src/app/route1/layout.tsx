import React from "react";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div>
      <div>Route1 layout</div>
      {children}
    </div>
  );
};

export default Layout;
