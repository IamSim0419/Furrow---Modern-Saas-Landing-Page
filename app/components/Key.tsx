import { twMerge } from "tailwind-merge";

type KeyProps = React.HTMLAttributes<HTMLDivElement>;

export default function Key({ className, children, ...otherProps }: KeyProps) {
  return (
    <div
      className={twMerge(
        "size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
}
