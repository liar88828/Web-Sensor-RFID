import {NextRequest} from "next/server";

export async function Inputs(request: NextRequest) {
  const url = new URL(request.url);
  // const method = request.method as TMethod
  // const pathname = url.pathname
  const searchParams = new URLSearchParams(url.search);


  let id = searchParams.get("id") ?? null
  let limit = searchParams.get("limit") ?? null
  let page = searchParams.get("page") ?? null

  return {id, limit, page}
}
