'use client'
import {PropsWithChildren} from 'react'
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'


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
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
