"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
const LazyComponent = () => {
  const { status, data } = useSession();

  return (
    <div>
      Lazy
      <div>
        Profile:{" "}
        {status === "authenticated" ? (
          data?.user?.name
        ) : (
          <Link data-test-id="test" href="/api/auth/signin/google">
            LOG IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default LazyComponent;
