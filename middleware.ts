import { NextResponse, type NextRequest } from 'next/server'
import { SESSION_COOKIE, decodeSession } from '@/lib/auth-shared'

export function middleware(request: NextRequest) {
  const session = decodeSession(request.cookies.get(SESSION_COOKIE)?.value)

  if (!session) {
    const url = new URL('/signin', request.url)
    url.searchParams.set('redirect', request.nextUrl.pathname)
    url.searchParams.set('reason', 'auth')
    return NextResponse.redirect(url)
  }

  if (session.role !== 'admin') {
    const url = new URL('/signin', request.url)
    url.searchParams.set('reason', 'forbidden')
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
