import {ISize, Method} from '@/interface/type'
import Link from "next/link";
import React from "react";


export function SubmitButton ( props: { method: Method } )
{
  return <button
    data-test={ `button-submit_${ props.method }` }
    type="submit"
    className=" btn btn-success w-full">
    { props.method === 'POST' ? 'Simpan' : 'Ubah' }
  </button>;
}

export function LinkButton({href, size = 'md'}: { href: string, size?:  ISize}) {
  return <Link href={href} className={`btn btn-primary btn-${size} text-white shadow`}>Table</Link>
}
