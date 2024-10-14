import React from "react";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div>
      <div>Route2 layout</div>
      {children}
    </div>
  );
};

export default Layout;
