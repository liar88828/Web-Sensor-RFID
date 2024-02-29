import {NextRequest, NextResponse} from "next/server";
import {Inputs, tryCatch} from "@/utils/next/apiAdd";
import {userData} from "@/utils/prisma/data/user";

export async function GET(req: NextRequest) {
  return tryCatch(async () => {
    const {id, page} = await Inputs(req)
    console.log(id, page)
    if (id) {
      const data = await userData.getUserIDForUser(id)
      return NextResponse.json({data})
    }
    return NextResponse.json({data: 'from api'})
  })
}
