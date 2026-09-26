// Adapted from 21st.dev "Bento Grid" by kokonutd (https://21st.dev/kokonutd/bento-grid)
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassIcon } from "./glass-icon";

export interface BentoItem {
  title: string;
  description: string;
  icon: ReactNode;
  image?: string;
  status?: string;
  statusClass?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  href?: string;
  colSpan?: 1 | 2 | 3;
  hasPersistentHover?: boolean;
}

const spanClass = { 1: "md:col-span-1", 2: "md:col-span-2", 3: "md:col-span-3" };

export function BentoGrid({ items, className }: { items: BentoItem[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 gap-4 md:grid-cols-3", className)}>
      {items.map((item) => {
        const Wrapper = item.href ? "a" : "div";
        return (
          <Wrapper
            key={item.title}
            {...(item.href ? { href: item.href, target: "_blank", rel: "noreferrer" } : {})}
            className={cn(
              "group relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
              "border border-border bg-card",
              "hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_12px_32px_-12px_rgba(37,99,235,0.25)]",
              "will-change-transform",
              spanClass[item.colSpan ?? 1],
              item.hasPersistentHover && "-translate-y-1 border-brand/30 shadow-[0_12px_32px_-12px_rgba(37,99,235,0.25)]"
            )}
          >
            <div
              className={cn(
                "absolute inset-0 transition-opacity duration-300",
                item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.07)_1px,transparent_1px)] bg-[length:6px_6px]" />
              <div className="absolute -top-24 -right-24 size-56 rounded-full bg-brand/10 blur-3xl" />
            </div>

            <div className="relative flex h-full flex-col gap-4">
              <div className="flex items-center justify-between">
                {item.image ? (
                  <GlassIcon src={item.image} alt={`${item.title} icon`} className="size-20" />
                ) : (
                  <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {item.icon}
                  </div>
                )}
                <span
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-medium",
                    item.statusClass ?? "bg-muted text-muted-foreground"
                  )}
                >
                  {item.status || "Active"}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                  {item.meta && <span className="ml-2 text-xs font-normal text-muted-foreground">{item.meta}</span>}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>

              <div className="mt-auto flex items-end justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags?.map((tag) => (
                    <span key={tag} className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
                {item.href && (
                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-brand opacity-70 transition-opacity group-hover:opacity-100">
                    {item.cta || "Open"} <ArrowUpRight className="size-3.5" />
                  </span>
                )}
              </div>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}
