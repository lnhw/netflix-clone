import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token");
  const url = request.nextUrl.clone(); // Tạo một bản sao của URL hiện tại để sửa đổi

  // Danh sách các route yêu cầu người dùng phải đăng nhập
  const protectedRoutes = ["/browse", "/tv", "/movies", "/profile", "/profile/setting"];

  if (token) {
    // Người dùng đã đăng nhập
    if (url.pathname === "/login" || url.pathname === "/") {
      // Ngăn truy cập vào trang login hoặc trang chủ, chuyển hướng đến trang browse
      url.pathname = "/browse";
      return NextResponse.redirect(url);
    }
  } else {
    // Người dùng chưa đăng nhập
    if (protectedRoutes.includes(url.pathname) || (url.pathname !== "/" && url.pathname !== "/login")) {
      // Nếu cố gắng truy cập vào một trang yêu cầu đăng nhập
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  // Trong trường hợp khác, tiếp tục xử lý yêu cầu bình thường
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/browse", "/login", "/tv", "/movies", "/profile", "/profile/setting"], // Áp dụng middleware này cho các đường dẫn cụ thể
};
