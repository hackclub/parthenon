import NextAuth from "next-auth";
import SlackProvider from "next-auth/providers/slack";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authOptions = {
  providers: [
    SlackProvider({
      clientId: process.env.SLACK_CLIENT_ID!,
      clientSecret: process.env.SLACK_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn(params: {
      user: import("next-auth").User;
      account: import("next-auth").Account | null;
      profile?: import("next-auth").Profile;
      email?: { verificationRequest?: boolean };
      credentials?: Record<string, unknown>;
    }) {
      // Debug: log Slack profile
      console.log("Slack profile:", params.profile);
      return true;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Add Slack ID to session
      if (session.user) {
        (session.user as { id?: string }).id = token.sub;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
//// hi hello hi hehe
