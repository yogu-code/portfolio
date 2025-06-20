import React from "react";
import { cn } from "@/lib/utils";

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative min-h-screen bg-zinc-50 text-slate-950 dark:bg-zinc-900 transition-bg",
        className
      )}
      {...props}
    >
      <div
        className="fixed inset-0 overflow-hidden"
        style={{
          "--aurora":
            "repeating-linear-gradient(100deg,#2563eb_10%,#8b5cf6_15%,#60a5fa_20%,#c4b5fd_25%,#3b82f6_30%)",
          "--dark-gradient":
            "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
          "--white-gradient":
            "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
          "--blue-300": "#60a5fa",
          "--blue-400": "#3b82f6",
          "--blue-500": "#2563eb",
          "--indigo-300": "#8b5cf6",
          "--violet-200": "#c4b5fd",
          "--black": "#000",
          "--white": "#fff",
          "--transparent": "transparent",
        }}
      >
        <div
          className={cn(
            `after:animate-aurora pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] invert filter will-change-transform`,
            `[background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%]`,
            `[--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]`,
            `[--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]`,
            `[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]`,
            `after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:mix-blend-difference after:content-[""]`,
            `dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
          )}
        />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};