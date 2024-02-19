import React, {ReactNode} from 'react';
import Loading from "@/components/elements/Loading";

function Prepare({loading, error, children}: {
  loading: boolean, error: boolean, children: ReactNode
}): ReactNode {
  if (loading) return <Loading/>
  if (error) return <h1>Error</h1>
  return children
}

export default Prepare;
