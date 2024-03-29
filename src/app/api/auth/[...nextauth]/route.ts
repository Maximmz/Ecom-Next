import NextAuth, {type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 15 * 24 * 60 * 60,
    },
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'hello@example.com'
                },
                password: {label: 'Password', type: 'password'}
            },
            async authorize(credentials) {
                const user = { id: '1', name: 'Mazin', email:'test@test.com'}
                return user
            }
        })
    ]
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
