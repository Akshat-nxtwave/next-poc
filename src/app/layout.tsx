import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  data: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const a = await parent;
  console.log("data => ", a);
  return {
    title: "This is next app",
    openGraph: {},
  };
}

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
