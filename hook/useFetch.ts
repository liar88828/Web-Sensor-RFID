import {useMutation, useQuery} from "@tanstack/react-query";
import {IPages} from "@/interface/type";
import {queryClient} from "@/components/provider/ReactQuery";
import {toast} from "react-toastify";
import {apiCreate, apiDelete, apiGetAll, apiGetIDWithPages, apiPatch, apiUpdate} from "@/utils/toApi";


const useGet = <T>(limit: string, page: string, to: IPages) => {
  return useQuery<T>({
    queryKey: [to],
    queryFn: async () =>
      apiGetAll(to, limit, page),
  })
}


// const useGetID = <T>(to: IPages, id: string, ) => {
//   return useQuery<T>({
//       queryKey: [to, id],
//       queryFn: async () => apiGetID(to, id),
//     },
//   )
// }
//
const useGetIDWithPages = <T>(to: IPages, id: string, page: IPages) => {
  return useQuery<T>({
      queryKey: [to, id],
      queryFn: async () => apiGetIDWithPages(to, id, page),
    },
  )
}

const useGetID = <T>(to: IPages, id: string, page?: IPages) => {
  return useQuery<T>({
      queryKey: [to, id],
      queryFn: async () => apiGetIDWithPages(to, id, page),
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


const usePatch = <T>(to: IPages, id: string, page: IPages) => {
  return useMutation({
      mutationFn: (json: Partial<T>) => apiPatch(to, id, page, json),
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


const useDelete = (to: IPages, id?: string, page?: IPages) => {
  return useMutation({
      mutationFn: async ({value}: { value: string }) => apiDelete(to, value, page),
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


export {useGet, useCreate, useUpdate, useDelete, useGetID, usePatch, useGetIDWithPages}
