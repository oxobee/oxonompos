import { ArrowRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function BentoGrid({ className, children, ...props }: BentoGridProps) {
  return (
    <div
      data-slot="bento-grid"
      className={cn(
        "grid w-full auto-rows-[24rem] sm:auto-rows-[26rem] grid-cols-1 gap-5 md:grid-cols-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  /** Visual filling the card behind the text (chart, image, animation…) */
  background?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  cta?: string;
}

export function BentoCard({
  name,
  description,
  background,
  icon,
  href,
  cta = "İncele",
  className,
  ...props
}: BentoCardProps) {
  return (
    <div
      data-slot="bento-card"
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-neutral-300 dark:border-neutral-800 dark:bg-card dark:hover:border-neutral-700",
        className
      )}
      {...props}
    >
      {/* Top Visual Area */}
      <div className="relative flex-1 w-full overflow-hidden min-h-[14rem] sm:min-h-[15rem] bg-neutral-50/50 dark:bg-neutral-900/30">
        {background && (
          <div className="size-full overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none">
            {background}
          </div>
        )}
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 flex flex-col justify-center gap-1.5 p-5 sm:p-6 bg-white border-t border-neutral-100 dark:bg-card dark:border-neutral-800/80">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {icon && <div className="text-primary [&_svg]:size-5">{icon}</div>}
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              {name}
            </h3>
          </div>
          {href && (
            <a
              href={href}
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline whitespace-nowrap"
            >
              <span>{cta}</span>
              <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
