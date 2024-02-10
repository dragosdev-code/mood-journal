"use client";

import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button
      className="rounded-xl bg-purple-800 px-8 py-3"
      onClick={() => signIn("discord")}
    >
      Discord
    </button>
  );
};

export default SignInButton;
