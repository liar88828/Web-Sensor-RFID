import {nextUrl} from "@/utils/nextAdd";

export async function apiPatch<T>(to: "anggota" | "sensor" | "record" | "user", id: string, add: Partial<T>) {
  let data = await fetch(`${nextUrl}/api/${to}?id=${id}`,//&limit=${limit}
    {
      method: "PATCH", headers: {'Content-type': "application/json"},
      body: JSON.stringify(add)
    });
  return await data.json();
}

export async function apiUpdate<T>(to: "anggota" | "sensor" | "record" | "user", id: string, add: T) {
  return fetch(nextUrl + '/api/' + to + '?id=' + id, {
    method: "PUT", headers: {'Content-type': "application/json"},
    body: JSON.stringify(add)
  })
    .then(data => data.json());
}

export async function apiCreate<T>(to: "anggota" | "sensor" | "record" | "user", id: string | undefined, add: T) {
  return fetch(`${nextUrl}/api/${to}?id=${id}`, {
    method: "POST", headers: {'Content-type': "application/json"},
    body: JSON.stringify(add)
  })
    .then(data => data.json());
}

export async function apiGetID(to: "anggota" | "sensor" | "record" | "user", id: string) {
  return fetch(nextUrl + '/api/' + to + '?id=' + id, {cache: 'no-store'})
    .then(data => data.json());
}

export async function apiGetAll(to: "anggota" | "sensor" | "record" | "user", limit: string, page: string) {
  return fetch(`${nextUrl}/api/${to}?limit=${limit}&page=${page}`, {cache: 'no-store'})
    .then(data => data.json());
}

export async function apiDelete(to: "anggota" | "sensor" | "record" | "user", id: string) {
  return fetch(nextUrl + '/api/' + to + '?id=' + id, {
    method: "DELETE"
  })
    .then(data => data.json());
}
