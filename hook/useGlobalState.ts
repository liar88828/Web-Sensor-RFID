import {queryClient} from "@/components/provider/ReactQuery";

type KEY = 'SENSOR'

export function useGlobalState<T>(key: KEY, initialData?: T | any) {
  // const query = useQuery<T>({
  //     queryKey: [key],
  //     queryFn: () => initialData,
  //     enabled: false,
  //     initialData
  //   }
  // )
  if (initialData) {
    queryClient.setQueryData([key], initialData)
  }
  const query = queryClient.getQueryData([key]) as T
  const mutate = (value: Required<T>) => queryClient.setQueryData([key], value)

  return {query, mutate}
}


// export function useGlobalState<T>(key: string, value?: T) {
//   const state = useQuery({queryKey: [key]})
//   const setState = queryClient.setQueryData([key], () => {
//     return value
//   })
//   return {state, setState}
// }
