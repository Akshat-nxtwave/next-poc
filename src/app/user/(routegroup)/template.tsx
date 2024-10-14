import React from "react";

const Template = ({ children }: { children: React.ReactElement }) => {
  return (
    <div>
      <div>Template</div>
      {children}
    </div>
  );
};

export default Template;
