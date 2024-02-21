import {AnggotaTable} from "@/components/tabels/tanstack/Anggota";

export default function page({searchParams: {limit, page}}: { searchParams: { limit: string, page: string } }) {
  return <AnggotaTable page={page} limit={limit}/>
}
