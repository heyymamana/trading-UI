import NextAuth from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { User } from './';

declare module 'next-auth' {
  /** Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context */
  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    user: User;
    sub: string;
    iat: number;
    exp: number;
    jti: string;
  }
}
