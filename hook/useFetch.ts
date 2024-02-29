import {keepPreviousData, useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {IPages} from "@/interface/type";

import {toast} from "react-toastify";
import {apiCreate, apiDelete, apiGetAll, apiGetIDWithPages, apiPatch, apiUpdate} from "@/utils/next/toApi";


const useGet = <T>(
  to: IPages,
  page: string | number,
  table?: IPages,
) => {
  return useQuery<T>({
    queryKey: [to, page, table],
    queryFn: async () => apiGetAll(to, page, table),
    placeholderData: keepPreviousData,

  })
}

const useGetIDWithPages = <T>(to: IPages, id: string, page: IPages) => {
  return useQuery<T>({
      queryKey: [to, id],
      queryFn: async () => apiGetIDWithPages(to, id, page),
    },
  )
}

const useGetID = <T>(to: IPages, id: string, page?: IPages | string) => {
  return useQuery<T>({
      queryKey: [to, id],
      queryFn: async () => apiGetIDWithPages(to, id, page),
    },
  )
}


const useCreate = <T>(to: IPages, id?: string) => {
  const queryClient = useQueryClient()
  return useMutation({
      mutationKey: [to],
      mutationFn: (add: T) => apiCreate(to, id, add),
      onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: [to]})
        toast.success(`${to} Create successfully`);
      },
      onError(error) {
        if (error.toString().includes('Unique')) {
          toast.error(error.toString());
        } else {
          toast.error(`${to} Create Fail`);
        }
      }
    }
  )
}


const useUpdate = <T>(to: IPages, id: string) => {
  const queryClient = useQueryClient()

  return useMutation({
      mutationFn: (add: T) => apiUpdate(to, id, add),
      onSuccess: async () => {
        console.log('test')
        await queryClient.invalidateQueries({queryKey: [to]})
        toast.success(`${to} Update successfully`);
      },
      onError() {
        toast.error(`${to} Update Fail`);
      }
    }
  )
}


const usePatch = <T>(to: IPages, id: string, page: IPages) => {
  const queryClient = useQueryClient()

  return useMutation({
      mutationFn: (json: Partial<T>) => apiPatch(to, id, page, json),
      onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: [to, id]})
        toast.success(`${to} Patch successfully`);
      },
      onError() {
        toast.error(`${to} Patch Fail`);
      }
    }
  )
}


const useDelete = (to: IPages,
                   page?: IPages,
) => {
  const queryClient = useQueryClient()

  return useMutation({
      // mutationKey: [to, page, table],
      mutationFn: ({value}: { value: string }) => apiDelete(to, value, page),
      onSuccess: async () => {
        await queryClient.invalidateQueries({queryKey: [to]})
        toast.success(`${to} Delete successfully`);
      },
      onError() {
        toast.error(`${to} Deleted Fail`);
      }
    }
  )
}


export {useGet, useCreate, useUpdate, useDelete, useGetID, usePatch, useGetIDWithPages}
