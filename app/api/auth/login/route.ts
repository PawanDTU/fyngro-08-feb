import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await dbConnect();

    const { email, password } = await req.json();
    console.log({email, password});
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return NextResponse.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
