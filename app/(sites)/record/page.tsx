import {RecordTable} from "@/components/tabels/tanstack/Record";

export default function Page({searchParams: {limit, page}}: { searchParams: { limit: string, page: string } }) {
  return <RecordTable limit={limit} page={page}/>
}
