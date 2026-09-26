import { cn } from "@/lib/utils";

/** App icon inside a frosted-glass tile with a glossy highlight. */
export function GlassIcon({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative shrink-0 rounded-[1.4rem] border border-white/70 bg-white/40 p-1.5 backdrop-blur-xl",
        "shadow-[0_10px_30px_-10px_rgba(37,99,235,0.45),inset_0_1px_0_rgba(255,255,255,0.9)]",
        "transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105",
        className
      )}
    >
      <div className="absolute -inset-2 -z-10 rounded-[1.8rem] bg-gradient-to-br from-brand/25 via-sky-300/20 to-violet-400/25 blur-xl" />
      <div className="relative size-full overflow-hidden rounded-[1.1rem] ring-1 ring-black/5">
        <img src={src} alt={alt} loading="lazy" className="size-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/45 via-white/5 to-transparent [clip-path:ellipse(95%_55%_at_50%_0%)]" />
      </div>
    </div>
  );
}
