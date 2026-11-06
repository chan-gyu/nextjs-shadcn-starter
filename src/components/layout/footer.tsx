import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t py-6">
      <p className="mx-auto max-w-5xl px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
