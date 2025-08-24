import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl;

  // --- Rule 1: ép domain về đúng ngôn ngữ ---
  if (host.includes("photoboothdanang.vn")) {
    // Nếu vào /vi/... thì ép thành /en/...
    if (pathname.startsWith("/vi")) {
      const newPath = pathname.replace(/^\/vi/, "/en");
      return NextResponse.redirect(new URL(newPath, request.url));
    }

    // Nếu vào root domain thì ép về /en
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/en", request.url));
    }
  }

  if (host.includes("chupanhthedanang.vn")) {
    // Nếu vào /en/... thì ép thành /vi/...
    if (pathname.startsWith("/en")) {
      const newPath = pathname.replace(/^\/en/, "/vi");
      return NextResponse.redirect(new URL(newPath, request.url));
    }

    // Nếu vào root domain thì ép về /vi
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/vi", request.url));
    }
  }

  if (host.includes("localhost:3000")) {
    // Nếu vào /en/... thì ép thành /vi/...
    if (pathname.startsWith("/en")) {
      const newPath = pathname.replace(/^\/en/, "/vi");
      return NextResponse.redirect(new URL(newPath, request.url));
    }

    // Nếu vào root domain thì ép về /vi
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/vi", request.url));
    }
  }

  // --- Nếu không match rule nào thì cho đi tiếp ---
  return NextResponse.next();
}
