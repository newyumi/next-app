export default function Layout(props: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <h1>대시보드와 아래 children, team, analytics 순서로 병렬 라우트</h1>
      {props.children}
      {props.team}
      {props.analytics}
    </main>
  );
}
