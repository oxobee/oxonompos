import { cn } from "@/lib/utils";

interface IphoneMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * iPhone frame with dynamic island and side buttons — drop any
 * screen content inside.
 */
export function IphoneMockup({
  className,
  children,
  ...props
}: IphoneMockupProps) {
  return (
    <div
      data-slot="iphone-mockup"
      className={cn("relative mx-auto w-70 rounded-[3.2rem]", className)}
      {...props}
    >
      {/* Side buttons */}
      <span className="absolute top-24 -left-0.75 h-8 w-1 rounded-l-md bg-neutral-700" />
      <span className="absolute top-36 -left-0.75 h-12 w-1 rounded-l-md bg-neutral-700" />
      <span className="absolute top-52 -left-0.75 h-12 w-1 rounded-l-md bg-neutral-700" />
      <span className="absolute top-32 -right-0.75 h-16 w-1 rounded-r-md bg-neutral-700" />

      {/* Outer Phone Hardware Shell */}
      <div
        className="relative aspect-[9/19.5] w-full rounded-[3.2rem] bg-neutral-950 p-2.5 shadow-2xl ring-1 ring-white/10"
        style={{
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
        }}
      >
        {/* Dynamic island */}
        <div className="absolute top-4 left-1/2 z-30 flex items-center justify-center -translate-x-1/2 h-5 w-20 rounded-full bg-black shadow-md ring-1 ring-white/10 pointer-events-none">
          <div className="size-2 rounded-full bg-[#0d0d0d] ring-1 ring-[#1f1f1f] mr-1.5" />
          <div className="size-1.5 rounded-full bg-[#0e1726]" />
        </div>

        {/* Inner Screen - Strictly clipped inside device chassis */}
        <div
          className="relative size-full overflow-hidden rounded-[2.5rem] bg-white select-none"
          style={{
            clipPath: "inset(0 round 2.5rem)",
            WebkitClipPath: "inset(0 round 2.5rem)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
