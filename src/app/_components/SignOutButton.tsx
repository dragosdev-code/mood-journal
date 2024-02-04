"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      className="rounded-xl bg-purple-800 px-8 py-3"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
