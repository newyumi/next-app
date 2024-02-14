export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>다이나믹 라우팅</h1>
      <div>
        <div>app 아래에 폴더를 만들고 page.tsx 파일 만들어서 컴포넌트 추가</div>
        <div>다음은 중첩 라우팅 추가해보자</div>
      </div>
    </main>
  );
}
