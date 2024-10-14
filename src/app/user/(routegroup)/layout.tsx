import React from "react";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <html lang="en">
      <body>
        <div style={{ border: "1px solid red" }}>
          <div>Inner section Layout</div>
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;
