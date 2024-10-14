import Link from "next/link";
import React from "react";

const Route1 = () => {
  return (
    <div>
      <h3>Route 1</h3>
      <Link href="/intercepting/route2">nav to route 2</Link>
      <br />
      <Link href="/intercepting/route1/sub-route">to sub route</Link>
      <br />
      <Link href="/user/jobs">To Jobs Page</Link>
    </div>
  );
};

export default Route1;
