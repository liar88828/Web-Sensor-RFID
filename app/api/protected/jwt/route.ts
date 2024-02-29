import {tryCatch} from "@/utils/next/apiAdd";
import {NextRequest, NextResponse} from "next/server";
import {verifyJwt} from "@/utils/validator/jwt";

export async function GET(req: NextRequest) {
  return tryCatch(async () => {
    const accessToken = req.headers.get('Authorization')

    if (accessToken && verifyJwt(accessToken)) {
      return NextResponse.json({message: 'You Have Logged In!'}, {status: 200})
    }
    return NextResponse.json('Unauthorized ,Protect Me !!!')
  })
}
