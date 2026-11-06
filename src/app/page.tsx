import { Layers, Palette, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Rocket,
    title: "Next.js 15 App Router",
    description: "서버 컴포넌트와 파일 기반 라우팅으로 빠르게 시작하세요.",
  },
  {
    icon: Layers,
    title: "Tailwind CSS v4",
    description: "tailwind.config 없이 CSS 기반 설정으로 스타일링합니다.",
  },
  {
    icon: Sparkles,
    title: "shadcn/ui",
    description: "복사해서 쓰는 접근성 좋은 UI 컴포넌트 모음입니다.",
  },
  {
    icon: Palette,
    title: "다크 모드",
    description: "next-themes로 라이트/다크/시스템 테마를 지원합니다.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <section className="flex flex-col items-center gap-6 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          웹 개발을 빠르게 시작하세요
        </h1>
        <p className="max-w-xl text-muted-foreground">
          Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui, lucide-react로
          구성된 스타터 킷입니다.
        </p>
        <div className="flex gap-3">
          <Button render={<Link href="/#features" />} nativeButton={false}>
            기능 보기
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href="https://ui.shadcn.com" target="_blank" rel="noreferrer" />}
          >
            shadcn/ui 문서
          </Button>
        </div>
      </section>

      <section id="features" className="grid gap-4 pb-20 sm:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <feature.icon className="mb-2 size-6" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
