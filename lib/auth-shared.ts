// Shared auth constants safe to import from both middleware (edge) and server code.
export type Role = 'user' | 'admin'

export interface Session {
  email: string
  name: string
  role: Role
}

export const SESSION_COOKIE = 'nestly_session'

// Demo accounts. In a real app these would live in a database with hashed passwords.
export const DEMO_ACCOUNTS: (Session & { password: string })[] = [
  {
    email: 'admin@nestly.com',
    password: 'admin123',
    name: 'Nestly Admin',
    role: 'admin',
  },
  {
    email: 'user@nestly.com',
    password: 'user123',
    name: 'Demo User',
    role: 'user',
  },
]

export function encodeSession(session: Session): string {
  return Buffer.from(JSON.stringify(session)).toString('base64')
}

export function decodeSession(value: string | undefined): Session | null {
  if (!value) return null
  try {
    const parsed = JSON.parse(
      Buffer.from(value, 'base64').toString('utf-8'),
    ) as Session
    if (!parsed?.email || !parsed?.role) return null
    return parsed
  } catch {
    return null
  }
}
