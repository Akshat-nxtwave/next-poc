import React from "react";

export const metadata = {
  title: "Custom Title",
  description: "Cusotm Description",
};

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <html lang="en">
      <body>
        <h1>Global Layout - GGG</h1>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
