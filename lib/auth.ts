import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "./database";
import { User } from "@/models/User";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          await connectDB();
          const existingUser = await User.findOne({
            email: credentials.email as string,
          });
          if (!existingUser) {
            throw new Error("Invalid Credentials");
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password as string,
            existingUser.password,
          );

          if (!isPasswordCorrect) {
            throw new Error("Invalid Credentials");
          }

          return {
            id: existingUser._id.toString(),
            email: existingUser.email,
            name: existingUser.fullName,
          };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],

  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },

    session: ({ session, token }) => {
      session.user.id = token.id as string;
      session.user.name = token.name;
      return session;
    },
  },
});
