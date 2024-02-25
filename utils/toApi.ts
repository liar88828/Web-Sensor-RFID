import {nextUrl} from "@/utils/nextAdd";
import {IPages} from "@/interface/type";

export async function apiPatch<T>(to: IPages, id: string, page: IPages, json: Partial<T>) {
  let res = await fetch(`${nextUrl}/api/${to}?id=${id}&page=${page}`,//&limit=${limit}
    {
      method: "PATCH", headers: {'Content-type': "application/json"},
      body: JSON.stringify(json)
    });
  if (!res.ok) {
    throw new Error(`Error Cannot Patch ${id} Data ${to}`)
  }

  return res.json()
}


export async function apiUpdate<T>(to: IPages, id: string, add: T) {
  const res = await fetch(nextUrl + '/api/' + to + '?id=' + id, {
    method: "PUT", headers: {'Content-type': "application/json"},
    body: JSON.stringify(add)
  })
  if (!res.ok) {
    throw new Error(`Error Cannot Update ${id} Data ${to}`)
  }

  return res.json()
}

export async function apiCreate<T>(to: IPages, id: string | undefined, add: T) {
  const res = await fetch(`${nextUrl}/api/${to}?id=${id}`, {
    method: "POST", headers: {'Content-type': "application/json"},
    body: JSON.stringify(add)
  })
  if (!res.ok) {
    throw new Error(`Error Cannot Create Data ${to}`)
  }
  return res.json()
}

export async function apiGetID(to: IPages, id: string,) {
  const res = await fetch(`${nextUrl}/api/${to}?id=${id}`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error(`Error Cannot Get ${id} Data ${to}`)
  }
  return res.json()
}


export async function apiGetIDWithPages(to: IPages, id: string, page?: IPages) {
  const res = await fetch(`${nextUrl}/api/${to}?id=${id}&page=${page}`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error(`Error Cannot Get Id Data ${to}`)
  }
  return res.json()
}

export async function apiGetAll(to: IPages, page: string | number) {
  const res = await fetch(`${nextUrl}/api/${to}?page=${page}`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error(`Error Cannot Get Data ${to}`)
  }
  return res.json()
}

export async function apiDelete(to: IPages, id: string, page?: IPages,) {
  const res = await fetch(`${nextUrl}/api/${to}?id=${id}&page=${page}`, {
    method: "DELETE"
  })
  if (!res.ok) {
    throw new Error(`Error Cannot Delete Data ${to}`)
  }
  return res.json()
}
