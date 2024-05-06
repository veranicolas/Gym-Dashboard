import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const cookies = request.cookies.get('sb-lucwnxiimesgkolwwfur-auth-token')

    if (request.nextUrl.pathname === '/login' && cookies) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    if (request.nextUrl.pathname.startsWith('/dashboard') && !cookies) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard', '/login']
}