import {NextRequest} from "next/server";
import {IPages} from "@/interface/type";

export async function Inputs(request: NextRequest) {
  const url = new URL(request.url);
  // const method = request.method as TMethod
  // const pathname = url.pathname
  const searchParams = new URLSearchParams(url.search);


  let id = searchParams.get("id") ?? null
  // let limit = searchParams.get("limit") ?? null
  let page: string | null | IPages = searchParams.get("page") ?? null

  return {id, page}
}
