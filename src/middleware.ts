import { NextResponse, NextRequest } from "next/server";
import { middlewareAuth } from "./utils/middleware-auth";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith("/signup") || pathname.startsWith("/signin")) {
        const user = await middlewareAuth(request);
        if (user) return NextResponse.redirect(new URL(`/`, request.nextUrl));
    }

    if (pathname.startsWith("/profile")) {
        const user = await middlewareAuth(request);
        if (!user)
            return NextResponse.redirect(new URL(`/signin`, request.nextUrl));
    }
}

export const config = {
    matcher: ["/profile/:path*", "/signup", "/signin"],
};
