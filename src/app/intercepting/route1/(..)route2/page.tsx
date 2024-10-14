import Link from "next/link";
import React from "react";

const Route1 = () => {
  return (
    <div>
      <h3>INTERCEPTED Route 2</h3>
      <Link href="/intercepting/route1">nav to route 1</Link>
    </div>
  );
};

export default Route1;
