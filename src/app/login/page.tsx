"use client";
import { signIn } from "next-auth/react";
import React from "react";
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";

const GoogleOAuth = () => {
  const handleSuccess = async (response: CredentialResponse) => {
    const token = response.credential;
    console.log(token, "tttttttt");
  };

  const handleError = () => {
    console.log("Login Failed");
  };
  return (
    <GoogleOAuthProvider
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
    >
      GoogleOAuth
      <div>
        <button onClick={() => signIn("google")}>Sign in with Google</button>
      </div>
      <div>
        Component :{" "}
        <GoogleLogin onSuccess={handleSuccess} onError={handleError} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleOAuth;
