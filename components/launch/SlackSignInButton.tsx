"use client";
import React from "react";
import { signIn } from "next-auth/react";

export default function SlackSignInButton({
  className = "",
}: {
  className?: string;
}) {
  const [loading, setLoading] = React.useState(false);

  const handleSignIn = () => {
    setLoading(true);
    signIn("slack", {
      callbackUrl: `${window.location.origin}`,
    });
  };

  return (
    <button
      onClick={handleSignIn}
      className={`flex items-center gap-2 bg-[#4A154B] hover:bg-[#3a1140] text-white font-bold py-2 px-4 rounded shadow transition duration-150 ${className}`}
      disabled={loading}
      style={{ textDecoration: "none", opacity: loading ? 0.7 : 1 }}
    >
      {loading ? "Redirecting..." : "Sign in with Slack"}
    </button>
  );
}
