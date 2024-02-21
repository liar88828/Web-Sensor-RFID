import ClientComponent from "@/app/(sites)/anggota/edit/ClientComponent";

export default function Page({searchParams: {id}}: { searchParams: { id: string } }) {
  return <ClientComponent id={id}/>
}
