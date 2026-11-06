import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ring) cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-foreground text-background hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_var(--glow)] active:translate-y-0",
        gradient:
          "text-white bg-[linear-gradient(100deg,var(--accent-blue),var(--accent-violet)_60%,var(--accent-magenta))] bg-[length:200%_100%] hover:bg-[position:100%_0] hover:-translate-y-0.5 hover:shadow-[0_16px_50px_-14px_var(--glow)] active:translate-y-0",
        outline:
          "border border-border-strong bg-transparent text-foreground hover:bg-foreground/5 hover:border-foreground/40",
        ghost: "text-foreground hover:bg-foreground/5",
        glass: "glass text-foreground hover:bg-foreground/5",
        link: "text-accent underline-offset-4 hover:underline rounded-none",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
