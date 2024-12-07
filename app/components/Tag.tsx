import { twMerge } from "tailwind-merge";

type TagProps = React.HTMLAttributes<HTMLDivElement>;

export default function Tag({ className, children, ...otherProps }: TagProps) {
  return (
    <div
      className={twMerge(
        "inline-flex border border-teal-400 gap-2 text-teal-400 px-3 py-1 rounded-full items-center",
        className
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}
