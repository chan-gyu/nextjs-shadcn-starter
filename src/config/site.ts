import type { LucideIcon } from "lucide-react";
import { Home, Zap } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

// 사이트 전역 설정 (이름, 설명, 네비게이션)을 한 곳에서 관리
export const siteConfig = {
  name: "Next.js Starter",
  description: "Next.js 15 + Tailwind CSS v4 + shadcn/ui 스타터 킷",
  navItems: [
    { title: "홈", href: "/", icon: Home },
    { title: "기능", href: "/#features", icon: Zap },
  ] satisfies NavItem[],
};
