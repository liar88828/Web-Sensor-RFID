'use client'
import {PropsWithChildren} from 'react'
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false,
      // refetchOnMount: false,
      // staleTime: 1000 * 10,
    },
  },
})


export default function TRQuery({children}: PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{children}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
}
