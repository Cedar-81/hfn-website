import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

type userInfoType = {
  _id: string;
  _type: string;
  name: string;
  email: string;
  image: string;
};

let refreshToken: string | null | undefined;

export default NextAuth({
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      //@ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
          scope:
            "openid email profile https://www.googleapis.com/auth/calendar",
        },
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      //@ts-ignore
      session.user = token;
      if (refreshToken) {
        session = {
          ...session,
          //@ts-ignore
          refresh_token: refreshToken,
        };
        return session;
      }
      return session;
    },
  },
});
