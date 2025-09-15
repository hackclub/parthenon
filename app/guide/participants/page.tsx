import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import SlackSignInButton from "@/components/launch/SlackSignInButton";

export default async function ParticipantsPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-2xl font-bold mb-4">Sign in to continue</h2>
        <SlackSignInButton />
      </div>
    );
  }
  // ...existing code...
}
