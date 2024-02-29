import {NextRequest, NextResponse} from "next/server";
import {IPages} from "@/interface/type";
import {ZodError} from "zod";
import {Prisma} from "@prisma/client";

export async function Inputs(request: NextRequest) {
  const url = new URL(request.url);
  // const method = request.method as TMethod
  // const pathname = url.pathname
  const searchParams = new URLSearchParams(url.search);

  let id = searchParams.get("id") ?? null
  // let limit = searchParams.get("limit") ?? null
  let page: string | null | IPages = searchParams.get("page") ?? null
  let table: string | null | IPages = searchParams.get("table") ?? null
  let method = request.method
  if (page === 'undefined') page = null
  if (table === 'undefined') table = null
  // console.log(method)
  if (method === 'POST' ||
    method === 'PUT' ||
    method === 'PATCH') {
    const json = await request.json()
    return {id, page, json, table}
  }
  return {id, page, table}
}


interface ErrorType {
  message: string,
  data: any
}

export async function tryCatch(fun: () => any) {
  try {
    return await fun()
  } catch (e: unknown) {

    if (e instanceof ZodError) {
      return NextResponse.json({
        message: e.issues,
        value: e.issues.map(d => d.path),
      }, {status: 400})
    }

    if (e instanceof Prisma.PrismaClientValidationError) {
      if (e.message.includes('Unique')) {
        const data = {
          message: e.message,
          error: 'Invalid type Data',
        }
        return NextResponse.json(data, {status: 400})
      }
    }
    if (e instanceof Prisma.PrismaClientKnownRequestError) {

      if (e.code === 'P2000') {
        return NextResponse.json({
          message: e.message,
          error: e.meta,
        }, {status: 400})
      }
      if (e.code === 'P2002') {

        if (e.message.includes('Unique')) {
          const data = {
            message: e.message,
            error: e.meta,
            value: e.meta?.target,
          }
          return NextResponse.json(data, {status: 400})
        }

      }
      return NextResponse.json({
        message: e.message,
        error: e.meta,
      }, {status: 400})
    }
    // console.log(e)
    // @ts-ignore
    if (e.message) {

      // @ts-ignore
      return NextResponse.json({message: e.message}, {status: 500}
      )
    }
    return NextResponse.json({
      message: 'error bos',
    }, {status: 500})
  }
}
