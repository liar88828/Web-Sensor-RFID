import {tryCatch} from "@/utils/next/apiAdd";
import {NextResponse} from "next/server";
import {getServerSession} from "next-auth";

export async function GET() {
  return tryCatch(async () => {
    const session = await getServerSession()
    if (session && session.user) {
      return NextResponse.json({message: 'You Have Logged In!'},)
    }
    return NextResponse.json("unauthorized", {status: 401});
  })
}
