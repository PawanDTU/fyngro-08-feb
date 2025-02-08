import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

export function authenticateToken(req: NextRequest) {
  const token = req.headers.get("Authorization")?.split(" ")[1]

  if (token == null) return null

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string)
    return user
  } catch (error) {
    return null
  }
}

