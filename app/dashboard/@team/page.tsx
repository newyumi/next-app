import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div style={{ border: "1px solid #fff", padding: 24 }}>
      TEAM PAGE
      <div>
        GO GO 
        <Link href={`/dashboard/settings`}>/dashboard/settings</Link>
      </div>
    </div>
  );
}
