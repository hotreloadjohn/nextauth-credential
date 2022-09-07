import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { signOut } from "next-auth/react";

const Protected = () => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);

  if (status !== "authenticated") {
    return <div>loading</div>;
  }

  return (
    <div>
      This page is Protected for special people. like{"\n"}
      {JSON.stringify(data.user, null, 2)}
      <button onClick={() => signOut({ callbackUrl: "/" })}>logout</button>
    </div>
  );
};

export default Protected;
