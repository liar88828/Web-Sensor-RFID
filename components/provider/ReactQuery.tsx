'use client'
import {PropsWithChildren} from 'react'
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 100_00,
    },
  },
})


export default function TRQuery({children}: PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
