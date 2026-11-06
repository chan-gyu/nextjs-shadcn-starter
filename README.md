# Next.js 15 + shadcn/ui 스타터 킷

웹 개발을 빠르게 시작할 수 있는 스타터 킷입니다.

## 기술 스택

| 기술 | 버전 | 비고 |
|---|---|---|
| Next.js | 15.5.x | App Router, Turbopack |
| React | 19 | |
| TypeScript | 5 | strict 모드 |
| Tailwind CSS | v4 | `tailwind.config` 없음 (CSS 기반 설정) |
| shadcn/ui | latest | `components.json` 참고 |
| lucide-react | latest | 아이콘 |
| next-themes | latest | 다크 모드 |

## 시작하기

요구사항: Node.js 20.9 이상

```bash
npm install
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다.

## 스크립트

| 명령어 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 검사 |
| `npm run lint:fix` | ESLint 자동 수정 |
| `npm run typecheck` | TypeScript 타입 검사 |

## 폴더 구조

```
src/
├── app/                 # App Router (layout, page, globals.css)
├── components/
│   ├── layout/          # header, footer, mobile-nav
│   ├── ui/              # shadcn/ui 컴포넌트
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── config/site.ts       # 사이트명, 설명, 네비게이션 설정
└── lib/utils.ts         # cn 유틸리티
```

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add dialog
```

추가된 컴포넌트는 `@/components/ui/<name>` 으로 import 합니다.

> 이 프로젝트의 shadcn 스타일(`base-nova`)은 Base UI 기반이라 `asChild` 대신 `render` prop을 사용합니다.
> 예: `<Button render={<Link href="/" />} nativeButton={false}>홈</Button>`

## 스타일링 (Tailwind v4)

- `src/app/globals.css`에서 `@import "tailwindcss";`로 활성화합니다.
- 테마 색상은 같은 파일의 CSS 변수와 `@theme inline`에서 수정합니다.
- PostCSS 설정은 `postcss.config.mjs`의 `@tailwindcss/postcss` 플러그인 하나만 사용합니다.

## 참고 문서

- [Next.js 설치](https://nextjs.org/docs/app/getting-started/installation)
- [Tailwind CSS + Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [shadcn/ui + Next.js](https://ui.shadcn.com/docs/installation/next)
