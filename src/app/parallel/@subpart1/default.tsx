import Link from "next/link";
import React from "react";

// we can only soft navigate to
const Default = () => {
  return (
    <div>
      default of subpart1
      <Link href="/parallel/nested-subpart1">navigate to nested</Link>
    </div>
  );
};

export default Default;
