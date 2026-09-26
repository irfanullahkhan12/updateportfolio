// Adapted from 21st.dev "Experience Timeline" by shadcnui-blocks (https://21st.dev/shadcnui-blocks/timeline-02)
import type { LucideIcon } from "lucide-react";
import { Building2, Calendar } from "lucide-react";

export interface TimelineEntry {
  title: string;
  company: string;
  period: string;
  points: string[];
  technologies: string[];
  icon: LucideIcon;
  logo?: string;
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative ml-4">
      <div className="absolute inset-y-0 left-0 border-l-2 border-dashed border-border" />

      {entries.map(({ company, points, period, technologies, title, icon: Icon, logo }) => (
        <div className="relative pb-14 pl-10 last:pb-0" key={company}>
          <div className="absolute left-px flex size-9 -translate-x-1/2 items-center justify-center rounded-full border border-border bg-card text-brand shadow-sm">
            <Icon className="size-4" />
          </div>

          <div className="space-y-3 rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                {logo ? (
                  <img src={logo} alt={`${company} logo`} loading="lazy" className="size-9 shrink-0 rounded-full bg-white object-contain ring-1 ring-border" />
                ) : (
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <Building2 className="size-4 text-primary" />
                  </div>
                )}
                <span className="font-semibold text-foreground">{company}</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Calendar className="size-4" />
                <span>{period}</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold tracking-[-0.01em] text-foreground">{title}</h3>
            <ul className="space-y-2 text-sm text-slate-600 sm:text-base">
              {points.map((pt) => (
                <li key={pt} className="flex gap-2.5 leading-relaxed">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand/60" />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-1">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
