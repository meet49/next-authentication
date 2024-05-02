import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname;
  
  const isPublicPath = path === '/login' || path === '/signup';
  const token = request.cookies.get("token")?.value || "";

//   console.log(isPublicPath, token);

  if (isPublicPath && token) {
    return NextResponse.next()
    // return NextResponse.redirect(new URL(path, request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/login','/signup','/profile'],
}