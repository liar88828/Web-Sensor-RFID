import {SensorTable} from "@/components/tabels/tanstack/Sensor";

export default function Page({searchParams: {limit, page}}: { searchParams: { limit: string, page: string } }) {
  return <SensorTable limit={limit} page={page}/>
}
