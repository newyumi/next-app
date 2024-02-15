export default function Layout(props: any) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Blog!!!</h1>
      {props.children}
    </main>
  );
}
