"use client";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import React from "react";

const Layout = ({
  children,
  subpart1,
  subpart2,
  subpart3,
  subpart4,
}: {
  children: React.ReactElement;
  subpart1: React.ReactElement;
  subpart2: React.ReactElement;
  subpart3: React.ReactElement;
  subpart4: React.ReactElement;
}) => {
  const val = useSelectedLayoutSegments("subpart1");
  console.log("valllllllll => ", val);
  return (
    <html lang="en">
      <body>
        <div style={{ border: "1px solid red", padding: "10px" }}>
          <div>Inner slot layout</div>

          <div
            style={{
              border: "1px solid green",
              display: "flex",
              gap: "10px",
              margin: "10px",
            }}
          >
            <div>{subpart1}</div>
            <div>
              {Math.floor(Math.random() * 10) % 2 ? subpart2 : subpart3}
            </div>
            <div>{subpart4}</div>
          </div>
        </div>
      </body>
    </html>
  );
};

export default Layout;
