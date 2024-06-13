import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    // Credentials({
    //   name: "Credentials",
    //   credentails: {
    //     username: {
    //       label: "Username",
    //       type: "text",
    //       placeholder: "aaa",
    //     },
    //     password: { label: "Passwrod", type: "password" },
    //   },
    // }),
    GithubProvider({
      clientId: process.env.GH_ID as string,
      clientSecret: process.env.GH_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({ user, account, email, credentials }) {
      return true;
    },
    async session({ session, user, token }) {
      return session;
    },
    async jwt({ token, user, account }) {
      return token;
    },
  },

  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
};
