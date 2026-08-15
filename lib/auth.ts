import { cookies } from 'next/headers'
import {
  SESSION_COOKIE,
  decodeSession,
  encodeSession,
  type Session,
} from './auth-shared'

export async function getSession(): Promise<Session | null> {
  const store = await cookies()
  return decodeSession(store.get(SESSION_COOKIE)?.value)
}

export async function setSession(session: Session): Promise<void> {
  const store = await cookies()
  store.set(SESSION_COOKIE, encodeSession(session), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}

export async function clearSession(): Promise<void> {
  const store = await cookies()
  store.delete(SESSION_COOKIE)
}
