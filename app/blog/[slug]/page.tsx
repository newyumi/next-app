export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1>다이나믹 라우팅</h1>
      <div>
        <div>app 아래에 폴더를 만들고 page.tsx 파일 만들어서 페이지 추가, page, layout 파일 필요</div>
        <div>app/blog/[slug] url에서 slug는 파라미터로 받는다, 동적 경로</div>

        <div>yarn build 하면 해당 페이지는 정적으로 생성됨</div>
      </div>
    </main>
  );
}
