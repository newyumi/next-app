This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## cypress 사용

e2e/component 테스트: npx cypress open

## SSR

서버 사이드 렌더링을 사용하면 모든 데이터가 매핑된 서비스 페이지를 브라우저에 바로 보여줄 수 있음. CSR보다 페이지를 구성하는 속도는 늦어지지만, 전체적으로 보여주는 콘텐츠 구성은 빨라짐. + SEO(search engine optimization; 검색 엔진 최적화) 또한 쉽게 구성 가능. - 웹크롤러 봇들은 HTML에서 콘텐츠를 수집하고 JS 파일은 읽지 못하기 때문

### 참고 SPA(single-page application)

단일 페이지 애플리케이션으로, 현재의 페이지를 동적으로 작성함으로써 사용자와 소통하는 웹 애플리케이션이다. 연속되는 페이지 간의 사용자 경험을 향상시키고, 웹 애플리케이션이 데스크톱 애플리케이션처럼 동작하도록 도와준다.

### use server (Server Actions)

Server Actions are asynchronous functions that are executed on the server. They can be used in Server and Client Components to handle form submissions and data mutations in Next.js applications.

함수에 'use server' 사용
서버 API를 따로 만들 필요 없이 DB 저장 기능을 클라이언트에서 개발할 수 있음

### use strict

엄격 모드, ES5부터 지원
런타임시 JS 코드에 대해 엄격한 parsing, error handling 자발적으로 적용하도록