import React from "react";
import SlackSignInButton from "@/components/launch/SlackSignInButton";

export default function ParticipantsPortal() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">Participants Portal</h1>
        <p className="text-lg text-gray-600">
          Welcome to the Hack Club Participants Portal. Sign in to access your
          resources and information.
        </p>
      </header>
      <section className="w-full max-w-md bg-white rounded-lg shadow p-6 flex flex-col gap-4">
        <SlackSignInButton />
        {/* Add more portal features below */}
        <div className="text-center text-gray-500 text-sm">
          More features coming soon...
        </div>
      </section>
    </main>
  );
}
