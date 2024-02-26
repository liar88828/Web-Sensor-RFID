import {NextRequest, NextResponse} from "next/server";
import {Inputs, tryCatch} from "@/utils/next/apiAdd";
import {userData} from "@/utils/prisma/data/user";
import {recordData} from "@/utils/prisma/data/record";

export async function GET(req: NextRequest) {
  return tryCatch(async () => {

    const {page} = await Inputs(req)

    if (page === 'status') {
      const data = await userData.status()
      return NextResponse.json(data, {status: 200})
    }


    if (page === 'line') {
      const data = await recordData.countRecordsByMonth()
      // console.log(data)
      return NextResponse.json(data, {status: 200})
    }

  })
}
