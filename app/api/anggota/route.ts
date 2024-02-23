import {NextRequest, NextResponse} from "next/server";
import {Inputs} from "@/utils/apiAdd";
import {anggotaData} from "@/utils/prisma/data/anggota";
import {IPages} from "@/interface/type";

export async function GET(req: NextRequest) {
  const {id,  page} = await Inputs(req)

  // console.log(page)
  if (page === 'create') {
    const data = await anggotaData.findDontHaveUser()
    return NextResponse.json(data, {status: 200})
  }

  if (page === 'dontHaveUser') {
    const data = await anggotaData.findDontHaveUser()
    return NextResponse.json(data, {status: 200})
  }


  if (!id  && page) {
    const data = await anggotaData.findAll(  Number(page))
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

  // console.log(id, limit, page)

}

export async function POST(req: NextRequest) {
  // console.log('test')
  const {id} = await Inputs(req)
  const json = await req.json()
  if (id) {
    const data = await anggotaData.createWithUser(id, json)
    return NextResponse.json(data, {status: 200})

  }
  const data = await anggotaData.create(json)
  return NextResponse.json(data, {status: 200})
}

export async function PUT(req: NextRequest) {
  // console.log('test')
  const {id} = await Inputs(req)
  const json = await req.json()
  if (id) {
    const data = await anggotaData.update(id, json)
    return NextResponse.json(data, {status: 200})
  }
  return NextResponse.json({data: 'Error'}, {status: 404})
}

export async function PATCH(req: NextRequest) {
  const {id, page} = await Inputs(req)
  console.log(id, page, 'test')
  const json = await req.json()
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
}


export async function DELETE(req: NextRequest) {
  const {id, page} = await Inputs(req)
  if (id) {
    if (page) {
      const data = await anggotaData.deletedPage(id, page as IPages)
      return NextResponse.json(data, {status: 200})
    }
    const data = await anggotaData.deleted(id)
    return NextResponse.json(data, {status: 200})
  }
  return NextResponse.json({data: 'Error'}, {status: 404})

}
