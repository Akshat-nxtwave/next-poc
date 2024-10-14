import React from "react";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <html lang="en">
      <body>
        <h1>Intercepting Routes Layout -</h1>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
