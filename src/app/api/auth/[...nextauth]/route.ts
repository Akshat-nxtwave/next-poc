import NextAuth from "next-auth";
import GoogleP from "next-auth/providers/google";

const nextAuth = NextAuth({
  providers: [
    GoogleP({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    signIn: (data) => {
      console.log(data, "aaaaaaaaaaaaa");
      return true;
    },
  },
});

export { nextAuth as GET, nextAuth as POST };
