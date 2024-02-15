import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div>
      SETTINGS
      <br />
      Soft Navigation으로 이동, Hard Navigation 으로 이동시 404, 전체 페이지 재렌더링이 필요한 Hard Navigation에서 Next.js는 먼저 일치하지 않는 슬롯의
      default.js 파일을 렌더링하려고 시도하고, 사용할 수 없는 경우 404를 렌더링함
      <br />
      route @슬롯: 슬롯은 라우트 세그먼트가 아니며, URL 구조에 영향을 주지 않습니다. 파일 경로 /@team/members는 /members에서 접근할 수 있음
      <br />
      <br />
      <Link href={`/dashboard`}>뒤로가기 (다시 /dashboard로 이동)</Link>
    </div>
  );
}
