import {NextRequest, NextResponse} from "next/server";
import {Inputs, tryCatch} from "@/utils/next/apiAdd";
import {anggotaData} from "@/utils/prisma/data/anggota";
import {IPages} from "@/interface/type";
import {userData} from "@/utils/prisma/data/user";


export async function GET(req: NextRequest) {
  return tryCatch(async () => {

    const {id} = await Inputs(req)
    if (id !== null) {
      const data = await userData.findProfileNew(id)
      // console.log(data)
      return NextResponse.json(data, {status: 200})
    }
  })
}

export async function PATCH(req: NextRequest) {
  return tryCatch(async () => {
    const {id, page, json} = await Inputs(req)
    if (id && page === 'sensor') {
      const data = await anggotaData.patchPage(id, page as IPages, json)
      return NextResponse.json(data, {status: 200})
    }
    return NextResponse.json({data: 'Error'}, {status: 404})
  })
}


export async function DELETE(req: NextRequest) {
  return tryCatch(async () => {

    const {id, page} = await Inputs(req)
    if (id) {
      if (page === 'sensor') {
        const data = await anggotaData.deletedPage(id, page)
        return NextResponse.json(data, {status: 200})
      }
    }
    console.log('error')
    return NextResponse.json({data: 'Error'}, {status: 404})

  })
}
