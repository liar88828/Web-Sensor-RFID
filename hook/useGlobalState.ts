import {useMutation, useQuery} from "@tanstack/react-query";
import {queryClient} from "@/components/provider/ReactQuery";
import {IPages, PropsData} from "@/interface/type";

type KEY = string[] | ['SENSOR']


export function useGlobalState<T>(key: KEY, initialData?: T | any) {
// const queryClients = useQueryClient()
  // const query = useQuery<T>({
  //     queryKey: [key],
  //     queryFn: () => initialData,
  //     enabled: false,
  //     initialData
  //   }
  // )

  // if (initialData) {
  //   queryClient.setQueryData(key, initialData)
  // }

  // if()
  // const query = queryClient.getQueryData(key) as T
  const query = useQuery<T>({
    queryKey: key,
    // queryFn: () => initialData,
    // enabled: false,
    // initialData: initialData,

  }).data

  // const mutate = (value: Required<T>) => queryClient.setQueryData(key, value)
  const set = useMutation({
    mutationFn: (add: T | any) => {
      // console.log(add)
      return add
    },
    onSuccess: async (data) => {
      queryClient.setQueryData(key, data)
      // console.log(data)
      // const validate = await queryClient.invalidateQueries({queryKey: key})
      // console.log(validate)
    },
    onError: (error) => {
      // console.log(error)

    }
  })
  // const set = {
  //   mutate
  // }
  return {query, set}
}


// export function useGlobalState<T>(key: string, value?: T) {
//   const state = useQuery({queryKey: [key]})
//   const setState = queryClient.setQueryData([key], () => {
//     return value
//   })
//   return {state, setState}
// }

export const useRQSGlobalState = (key: [IPages, PropsData ], initialData: any) => [
  useQuery({
    queryKey: key,
    queryFn: () => initialData,
    enabled: false,
    initialData: initialData,
  }).data,
  (value: any) => queryClient.setQueryData(key, value),
]
