import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  try {
    const token = request.headers.get("token");

    jwt.verify(token!, process.env.JWT_SECRET!);
  } catch {
    return NextResponse.json({ message: "Unauthorizate" }, { status: 401 });
  }
}
