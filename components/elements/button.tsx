import { Method } from '@/interface/type'


export function SubmitButton ( props: { method: Method } )
{
  return <button
    data-test={ `button-submit_${ props.method }` }
    type="submit"
    className=" btn btn-success w-full">
    { props.method === 'POST' ? 'Simpan' : 'Ubah' }
  </button>;
}
