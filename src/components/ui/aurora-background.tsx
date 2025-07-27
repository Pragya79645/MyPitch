"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-white text-slate-950 dark:bg-gray-900",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--google-aurora":
                "repeating-linear-gradient(100deg,#4285f4_10%,#ea4335_20%,#fbbc04_30%,#34a853_40%,#4285f4_50%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
              "--google-blue": "#4285f4",
              "--google-red": "#ea4335",
              "--google-yellow": "#fbbc04",
              "--google-green": "#34a853",
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--google-aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-40 blur-[10px] invert filter will-change-transform [--google-aurora:repeating-linear-gradient(100deg,var(--google-blue)_10%,var(--google-red)_20%,var(--google-yellow)_30%,var(--google-green)_40%,var(--google-blue)_50%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--google-aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--google-aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--google-aurora)]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
      <style jsx>{`
        @keyframes aurora {
          0%, 100% {
            background-position: 50% 50%, 50% 50%;
          }
          50% {
            background-position: 350% 50%, 350% 50%;
          }
        }
        .after\\:animate-aurora::after {
          animation: aurora 60s ease infinite;
        }
      `}</style>
    </main>
  );
};