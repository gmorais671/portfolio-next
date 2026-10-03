import { NextRequest, NextResponse } from "next/server";
// Keep the existing root entry point and its #section links working.
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/pt";
  return NextResponse.redirect(url);
}
export const config = { matcher: ["/"] };
