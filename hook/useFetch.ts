import {useMutation, useQuery} from "@tanstack/react-query";
import {IPages} from "@/interface/type";
import {nextUrl} from "@/utils/nextAdd";
import {queryClient} from "@/components/provider/ReactQuery";
import {toast} from "react-toastify";


const useGet = <T>(limit: string, page: string, to: IPages) => {
  return useQuery<T>({
    queryKey: [to],

    queryFn: async () =>
      fetch(`${nextUrl}/api/${to}?limit=${limit}&page=${page}`, {cache: 'no-store'})
        .then(data => data.json()),
    // refetchInterval: 1000 * 20
  })
}

const useGetID = <T>(to: IPages, id: string) => {
  return useQuery<T>({

      queryKey: [to, id],
      queryFn: async () =>
        fetch(nextUrl + '/api/' + to + '?id=' + id, {cache: 'no-store'})
          .then(data => data.json()),
      // refetchInterval: 1000 * 20

    },
  )
}


const useCreate = <T>(to: IPages) => {
  return useMutation({
      mutationFn: (add: T) => fetch(nextUrl + '/api/' + to, {
        method: "POST", headers: {'Content-type': "application/json"},
        body: JSON.stringify(add)
      })
        .then(data => data.json()),
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: [to]})
        toast.success(`${to} Create successfully`);
      },
      onError() {
        toast.error(`${to} Deleted Fail`);
      }
    }
  )
}

const useUpdate = <T>(to: IPages, id: string) => {
  return useMutation({
      mutationFn: (add: T) => fetch(nextUrl + '/api/' + to + '?id=' + id, {
        method: "PUT", headers: {'Content-type': "application/json"},
        body: JSON.stringify(add)
      })
        .then(data => data.json()),
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: [to]})
        toast.success(`${to} Create successfully`);
      },
      onError() {
        toast.error(`${to} Deleted Fail`);
      }
    }
  )
}


const useDelete = (to: IPages) => {
  return useMutation({
      mutationFn: (id: string) => fetch(nextUrl + '/api/' + to + '?id=' + id, {
        method: "DELETE"
      })
        .then(data => data.json()),
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: [to]})
        toast.success(`${to} Create successfully`);
      },
      onError() {
        toast.error(`${to} Deleted Fail`);
      }
    }
  )
}


export {useGet, useCreate, useUpdate, useDelete, useGetID}
