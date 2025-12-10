import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Danh sách các crawler/bot cần được phép truy cập trực tiếp (không redirect)
const CRAWLER_USER_AGENTS = [
  "googlebot",
  "google-inspectiontool",
  "bingbot",
  "slurp",
  "duckduckbot",
  "baiduspider",
  "yandexbot",
  "sogou",
  "exabot",
  "facebot",
  "ia_archiver",
  "facebookexternalhit",
  "twitterbot",
  "rogerbot",
  "linkedinbot",
  "embedly",
  "quora link preview",
  "showyoubot",
  "outbrain",
  "pinterest",
  "slackbot",
  "vkShare",
  "W3C_Validator",
  "whatsapp",
  "flipboard",
  "tumblr",
  "bitlybot",
  "skypeuripreview",
  "nuzzel",
  "discordbot",
  "google page speed",
  "qwantify",
  "pinterestbot",
  "bitrix link preview",
  "xing-contenttabreceiver",
  "chrome-lighthouse",
  "applebot",
  "yandex",
  "calendlybot",
  "ahrefsbot",
  "semrushbot",
];

/**
 * Kiểm tra xem request có phải từ crawler/bot không
 */
function isCrawler(request: NextRequest): boolean {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";
  return CRAWLER_USER_AGENTS.some((bot) => userAgent.includes(bot));
}

export function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl;

  // Set pathname header để sử dụng trong generateMetadata
  const response = NextResponse.next();
  response.headers.set("x-pathname", pathname);

  // Cho phép crawler truy cập trực tiếp vào URL với ngôn ngữ cụ thể (không redirect)
  // Điều này giúp Google có thể index được các trang
  if (isCrawler(request)) {
    return response;
  }

  // Cho phép truy cập trực tiếp vào các file tĩnh và API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots.txt") ||
    pathname.startsWith("/sitemap.xml") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|css|js|woff|woff2|ttf|eot)$/)
  ) {
    return response;
  }

  // --- Rule 1: ép domain về đúng ngôn ngữ (chỉ cho user thông thường) ---
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
  return response;
}
