import { twMerge } from "tailwind-merge";

type AvatarProps = React.HTMLAttributes<HTMLDivElement>;

export default function Avatar({
  className,
  children,
  ...otherProps
}: AvatarProps) {
  return (
    <div
      className={twMerge(
        "size-20 overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900 rounded-full",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
}
