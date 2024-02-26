import {NextRequest, NextResponse} from "next/server";
import {Inputs, tryCatch} from "@/utils/next/apiAdd";
import {userData} from "@/utils/prisma/data/user";

export async function GET(req: NextRequest) {
  return tryCatch(async () => {

    const {id, page} = await Inputs(req)

    if (page === 'create') {
      const data = await userData.findDontHaveUser()
      return NextResponse.json(data, {status: 200})
    }


    if (!id && page) {
      const data = await userData.findAll(Number(page))
      return NextResponse.json(data, {status: 200})
    }

    if (id !== null) {
      return NextResponse.json('cannot be null', {status: 403})
    }


  })
}

export async function POST(req: NextRequest) {
  return tryCatch(async () => {
    const json = await req.json()
    const data = await userData.create(json)
    return NextResponse.json(data, {status: 200})
  })
}

export async function PUT(req: NextRequest) {
  return tryCatch(async () => {
    const {id, json} = await Inputs(req)

    if (id) {
      const data = await userData.update(id, json)
      return NextResponse.json(data, {status: 200})
    }
    return NextResponse.json({data: 'Error'}, {status: 404})
  })
}


export async function DELETE(req: NextRequest) {
  return tryCatch(async () => {
    const {id} = await Inputs(req)
    if (id) {

      const data = await userData.deleted(id)
      return NextResponse.json(data, {status: 200})
    }
    return NextResponse.json({data: 'Error'}, {status: 404})

  })
}
