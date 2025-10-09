import { NextRequest, NextResponse } from 'next/server';

// Temporary middleware that allows all requests for testing UI changes
export default function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
