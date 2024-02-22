import {useMutation, useQuery} from "@tanstack/react-query";
import {IPages} from "@/interface/type";
import {queryClient} from "@/components/provider/ReactQuery";
import {toast} from "react-toastify";
import {apiCreate, apiDelete, apiGetAll, apiGetID, apiPatch, apiUpdate} from "@/utils/toApi";


const useGet = <T>(limit: string, page: string, to: IPages) => {
  return useQuery<T>({
    queryKey: [to],
    queryFn: async () =>
      apiGetAll(to, limit, page),
  })
}


const useGetID = <T>(to: IPages, id: string) => {
  return useQuery<T>({
      queryKey: [to, id],
      queryFn: async () => apiGetID(to, id),
    },
  )
}


const useCreate = <T>(to: IPages, id?: string) => {
  return useMutation({
      mutationFn: (add: T) => apiCreate(to, id, add),
      onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: [to]})
        toast.success(`${to} Create successfully`);
      },
      onError() {
        toast.error(`${to} Create Fail`);
      }
    }
  )
}


const useUpdate = <T>(to: IPages, id: string) => {
  return useMutation({
      mutationFn: (add: T) => apiUpdate(to, id, add),
      onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: [to]})
        toast.success(`${to} Create successfully`);
      },
      onError() {
        toast.error(`${to} Deleted Fail`);
      }
    }
  )
}


const usePatch = <T>(to: IPages, id: string) => {
  return useMutation({
      mutationFn: (add: Partial<T>) => apiPatch(to, id, add),
      onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: [to, id]})
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
      mutationFn: (id: string) => apiDelete(to, id),
      onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: [to]})
        toast.success(`${to} Create successfully`);
      },
      onError() {
        toast.error(`${to} Deleted Fail`);
      }
    }
  )
}


export {useGet, useCreate, useUpdate, useDelete, useGetID, usePatch}
