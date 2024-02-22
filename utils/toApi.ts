import {nextUrl} from "@/utils/nextAdd";
import {IPages} from "@/interface/type";

export async function apiPatch<T>(to: IPages, id: string, page: IPages, json: Partial<T>) {
  let data = await fetch(`${nextUrl}/api/${to}?id=${id}&page=${page}`,//&limit=${limit}
    {
      method: "PATCH", headers: {'Content-type': "application/json"},
      body: JSON.stringify(json)
    });
  return await data.json();
}


export async function apiUpdate<T>(to: IPages, id: string, add: T) {
  return fetch(nextUrl + '/api/' + to + '?id=' + id, {
    method: "PUT", headers: {'Content-type': "application/json"},
    body: JSON.stringify(add)
  })
    .then(data => data.json());
}

export async function apiCreate<T>(to: IPages, id: string | undefined, add: T) {
  return fetch(`${nextUrl}/api/${to}?id=${id}`, {
    method: "POST", headers: {'Content-type': "application/json"},
    body: JSON.stringify(add)
  })
    .then(data => data.json());
}

export async function apiGetID(to: IPages, id: string,) {
  return fetch(`${nextUrl}/api/${to}?id=${id}`, {cache: 'no-store'})
    .then(data => data.json());
}


export async function apiGetIDWithPages(to: IPages, id: string, page?: IPages) {
  return fetch(`${nextUrl}/api/${to}?id=${id}&page=${page}`, {cache: 'no-store'})
    .then(data => data.json());
}

export async function apiGetAll(to: IPages, limit: string, page: string) {
  return fetch(`${nextUrl}/api/${to}?limit=${limit}&page=${page}`, {cache: 'no-store'})
    .then(data => data.json());
}

export async function apiDelete(to: IPages,
                                id: string,
                                page?: IPages,
) {
  return fetch(`${nextUrl}/api/${to}?id=${id}&page=${page}`, {
    method: "DELETE"
  })
    .then(data => data.json());
}
