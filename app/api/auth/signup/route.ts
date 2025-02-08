import { NextResponse } from "next/server"
import dbConnect from "@/lib/dbConnect"
import User from "@/models/User"

export async function POST(req: Request) {
  try {
    await dbConnect()
    const { name, email, password } = await req.json()

    const userExists = await User.findOne({ email })

    if (userExists) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    const user = await User.create({
      name,
      email,
      password,
    })

    return NextResponse.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

