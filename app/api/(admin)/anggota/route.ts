import {NextRequest, NextResponse} from "next/server";
import {Inputs, tryCatch} from "@/utils/next/apiAdd";
import {anggotaData} from "@/utils/prisma/data/anggota";
import {IPages} from "@/interface/type";
import {pageArray} from "@/utils/next/nextAdd";

export async function GET(req: NextRequest) {
  return tryCatch(async () => {

    const {id, page} = await Inputs(req)

    if (!id && page) {
      const data = await anggotaData.findAll(Number(page))
      return NextResponse.json(data, {status: 200})
    }
    // console.log(id, page)
    if (id !== null) {

      if (page === 'user') {
        const data = await anggotaData.findAllWithID("id_user", id)
        return NextResponse.json(data, {status: 200})
      }

      if (id.length >= 1) {

        const data = await anggotaData.findKey('id', id)
        return NextResponse.json(data, {status: 200})
      }
    }

  })
}

export async function POST(req: NextRequest) {
  return tryCatch(async () => {

    const {id, json} = await Inputs(req)

    if (id) {
      const data = await anggotaData.createWithUser(id, json)
      return NextResponse.json(data, {status: 200})

    }
    const data = await anggotaData.create(json)
    return NextResponse.json(data, {status: 200})
  })
}

export async function PUT(req: NextRequest) {
  return tryCatch(async () => {

    const {id, json} = await Inputs(req)
    if (id) {
      const data = await anggotaData.update(id, json)
      return NextResponse.json(data, {status: 200})
    }
    return NextResponse.json({data: 'Error'}, {status: 404})
  })
}

export async function PATCH(req: NextRequest) {
  return tryCatch(async () => {

    const {id, page, json} = await Inputs(req)


    if (id) {
      if (page) {
        const data = await anggotaData.patchPage(id, page as IPages, json)
        return NextResponse.json(data, {status: 200})
      }
      //
      // const data = await anggotaData.update(id, json)
      // return NextResponse.json(data, {status: 200})
    }
    return NextResponse.json({data: 'Error'}, {status: 404})
  })
}


export async function DELETE(req: NextRequest) {
  return tryCatch(async () => {

    const {id, page} = await Inputs(req)
    // console.log(id,)
    // console.log(typeof page)
    if (id) {
      if (page) {
        if (pageArray.includes(page)) {
          const data = await anggotaData.deletedPage(id, page as IPages)
          return NextResponse.json(data, {status: 200})
        }
      }
      const data = await anggotaData.deleted(id)
      return NextResponse.json(data, {status: 200})
    }
    return NextResponse.json({data: 'Error'}, {status: 404})

  })
}
