import { NextResponse } from "next/server"
import { updateUserData, getUserData } from "@/lib/user-data"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Update user data
    const updatedData = updateUserData(data)

    return NextResponse.json({
      success: true,
      userData: updatedData,
    })
  } catch (error) {
    console.error("Error updating profile:", error)
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Get user data
    const userData = getUserData()

    return NextResponse.json({
      success: true,
      userData,
    })
  } catch (error) {
    console.error("Error fetching profile:", error)
    return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 })
  }
}
