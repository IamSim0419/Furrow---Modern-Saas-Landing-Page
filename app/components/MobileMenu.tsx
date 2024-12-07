import { twMerge } from "tailwind-merge";
import Button from "@/components/ui/Button";

type toggleProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenu({ isOpen, setIsOpen }: toggleProps) {
  return (
    <div>
      <div className="flex justify-end gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <line
            x1="3"
            y1="6"
            x2="21"
            y2="6"
            className={twMerge(
              "origin-left transition",
              isOpen && "rotate-45 -translate-y-1"
            )}
          />
          <line
            x1="3"
            y1="12"
            x2="21"
            y2="12"
            className={twMerge("transition", isOpen && "opacity-0")}
          />
          <line
            x1="3"
            y1="18"
            x2="21"
            y2="18"
            className={twMerge(
              "origin-left transition",
              isOpen && "-rotate-45 translate-y-1"
            )}
          />
        </svg>
        <Button
          variant="secondary"
          className="hidden md:inline-flex items-center"
        >
          Log In
        </Button>
        <Button
          variant="primary"
          className="hidden md:inline-flex items-center"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
