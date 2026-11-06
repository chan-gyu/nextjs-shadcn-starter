# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 개요

Next.js 15(App Router, React 19) + TypeScript + Tailwind CSS v4 + shadcn/ui + lucide-react 스타터 킷. 테스트 러너는 구성되어 있지 않다.

## 명령어

```bash
npm run dev         # 개발 서버 (Turbopack)
npm run build       # 프로덕션 빌드
npm run lint        # ESLint (flat config: eslint.config.mjs)
npm run lint:fix
npm run typecheck   # tsc --noEmit
npx shadcn@latest add <name>   # shadcn 컴포넌트 추가
```

## 버전 제약 (중요)

- Next.js는 **15로 고정**한다. 공식 문서의 최신은 v16이지만 의도적으로 15를 사용한다. `create-next-app@latest`나 `next upgrade`로 올리지 말 것.
- Tailwind v4는 **`tailwind.config.*` 파일이 없다**. 테마·토큰은 `src/app/globals.css`의 CSS 변수와 `@theme inline`에서 관리한다. PostCSS는 `postcss.config.mjs`의 `@tailwindcss/postcss` 플러그인만 사용한다.
- import alias `@/*` → `./src/*`. 모든 코드는 `src/` 아래에 둔다.

## 아키텍처 메모

- **shadcn 스타일이 `base-nova`(Base UI 기반)** 이다. Radix가 아니므로 `asChild`가 없고 `render` prop을 쓴다. 링크 버튼은 `<Button render={<Link href="/" />} nativeButton={false}>`, 트리거는 `<DropdownMenuTrigger render={<Button ... />}>` 형태다.
- `cn` 유틸은 `src/lib/utils.ts`에서 `cn` 패키지를 re-export 한다 (`clsx`+`tailwind-merge` 직접 구현이 아님).
- `src/components/ui/`는 shadcn이 생성한 파일이다. 수정보다 `shadcn add`로 재생성/추가하는 것을 우선한다.
- 사이트명·설명·네비게이션은 `src/config/site.ts`의 `siteConfig` 한 곳에서 관리하며 `layout.tsx`, `header.tsx`, `mobile-nav.tsx`가 공유한다.
- 다크 모드: `layout.tsx`의 `ThemeProvider`(next-themes, `attribute="class"`)와 `globals.css`의 `@custom-variant dark`가 짝을 이룬다. 둘 중 하나만 바꾸면 동작하지 않는다.
- 폰트: `layout.tsx`에서 Geist의 `--font-geist-sans`/`--font-geist-mono` 변수를 주입하고, `globals.css`의 `--font-sans`가 이를 참조한다. `--font-sans: var(--font-sans)`처럼 자기 참조가 되지 않게 주의 (shadcn init이 이렇게 생성한 적이 있어 수정했음).

## 사용자 규칙

- 응답·문서·비즈니스 로직 주석은 한국어, 변수명은 영어(camelCase), 들여쓰기 2칸.
- Windows 환경이며 저장소의 줄바꿈 경고(LF→CRLF)는 무시해도 된다. `create-next-app`은 `.claude/`가 있는 현재 폴더에 직접 생성되지 않는다.
