import { cva } from "class-variance-authority";

type ButtonProps = {
  variant: "primary" | "secondary";
  size?: "sm";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "border-teal-400 bg-teal-400 text-neutral-950",
      secondary: "border-white text-white bg-transparent",
    },
    size: {
      sm: "h-10",
    },
  },
});

export default function Button({
  variant,
  size,
  className,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
}
