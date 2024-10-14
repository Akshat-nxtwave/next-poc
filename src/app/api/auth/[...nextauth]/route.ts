import NextAuth from "next-auth";
import GoogleP from "next-auth/providers/google";
import CredentialsP from "next-auth/providers/credentials";

const nextAuth = NextAuth({
  providers: [
    GoogleP({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsP({
      name: "Credentials",
      credentials: {
        username: {
          label: "Email :",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password :",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = { id: "1234", name: "Akshat", password: "A" };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    signIn: (data) => {
      console.log(data, "aaaaaaaaaaaaa");
      return true;
    },
  },
});

export { nextAuth as GET, nextAuth as POST };
