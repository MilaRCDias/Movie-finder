import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import {PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

type UserAccount = {
  id: string;
  username: string;
};

let userAccount: UserAccount | null = null;

const confirmPasswordHash = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  const res = await bcrypt.compare(plainPassword, hashedPassword);
  return res;
};

const authHandler: NextApiHandler = (req: NextApiRequest, res:NextApiResponse<unknown>) =>
  NextAuth(req, res, options);

const options = {
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        username: {
          label: 'Email',
          type: 'email',
          placeholder: 'jsmith@example.com',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials: { username: string; password: string }) {
        try {
          const user = await prisma.user.findFirst({
            where: {
              username: credentials.username,
            },
          });

          console.log('user, ', user);

          if (user) {
            const res = await confirmPasswordHash(
              credentials.password,
              user.password
            );

            if (res) {
              userAccount = {
                id: user.id,
                username: user.username,
              };

              return userAccount;
            } else {
              console.log('Hash not matched logging in');
            }
          }
        } catch (err) {
          console.log('Authorize error:', err);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log('JWT callback. Got User: ', user);

      if (user) {
        token.user = user;
      }

      return token;
    },
    session: ({ session, token }) => {
      if (userAccount) {
        session.user = {
          id: userAccount.id,
          username: userAccount.username,
        };
      } else if (
        token.user &&
        (!session.user || (session.user && !session.user.id))
      ) {
        session.user = token.user;
      } else if (token) {
        session.token = token;
      }

      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    encryption: true,
  },
};

export default authHandler;
