import jwt from "jsonwebtoken";

export function verificator(request: Request) {
  const token = request.headers.get("token");

  jwt.verify(token!, process.env.JWT_SECRET!);
}
