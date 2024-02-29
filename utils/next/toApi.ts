import {nextUrl} from "@/utils/next/nextAdd";
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
  let url = `${nextUrl}/api/${to}?`
  if (id) {
    url.concat('?id=${id}')
  }
  // console.log(url)
  const res = await fetch(url, {
    method: "POST", headers: {'Content-type': "application/json"},
    body: JSON.stringify(add)
  })
  if (!res.ok) {
    const data = await res.json()
    if (data.message.toString().includes('Unique')) {
      const value = data.value
      let text = `The ${value} Data Is Unique `
      // console.log(text)
      throw new Error(text)
    }


    throw new Error(
      JSON.stringify({message: data.message, value: data.value})
      //`Error Cannot Create Data ${to}`
    )
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


export async function apiGetIDWithPages(to: IPages, id: string, page?: IPages|string) {
  const res = await fetch(`${nextUrl}/api/${to}?id=${id}&page=${page}`, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error(`Error Cannot Get Id Data ${to}`)
  }
  return res.json()
}

export async function apiGetAll(to: IPages, page: string | number, table?: IPages) {

  // console.log(page,table)
  let url = `${nextUrl}/api/${to}?page=${page}&table=${table}`

  // let url = `${nextUrl}/api/${to}?`
  // url = page && url.concat(url, `page=${page}&`)
  // url = page && url.concat(url, `table=${table}`)

  console.log(url)
  const res = await fetch(url, {cache: 'no-store'})
  if (!res.ok) {
    throw new Error(`Error Cannot Get Data ${to}`)
  }
  return res.json()
}

export async function apiDelete(
  to: IPages,
  id: string,
  page?: IPages|null,
) {
  const res = await fetch(`${nextUrl}/api/${to}?id=${id}&page=${page}`, {
    method: "DELETE"
  })
  if (!res.ok) {
    console.log(await res.json())
    throw new Error(`Error Cannot Delete Data ${to}`)
  }
  return res.json()
}
