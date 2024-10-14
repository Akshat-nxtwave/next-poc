import { NextResponse, type NextRequest } from "next/server";

// NEXT ALLOWS ONLY 1 MIDDLEWARE FILE
const middleware = (req: NextRequest): NextResponse<unknown> => {
  // check if route is restricted
  if (new URL(req.url).pathname === "/admin") {
    return checkAdminAccessMiddleware(req);
  }

  return NextResponse.next();
};
export default middleware;

const checkAdminAccessMiddleware = (
  req: NextRequest
): NextResponse<unknown> => {
  const token = req.cookies.get("admin-access-token");
  console.log(token, "token");
  if (token) {
    // compute some validation logic
    if (token.value === "yes") {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/no-access", req.url));
};
