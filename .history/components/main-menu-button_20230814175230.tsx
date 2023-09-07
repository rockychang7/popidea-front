import Link from "next/link";
import { Button } from "./ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Gamepad2, ChevronRightSquare, Wallet2 } from "lucide-react";

interface Props {
  path: string;
  children: ReactNode;
  type: string;
}

export default function MainMenuLink(param: Props) {
  return (
    <>
      <Link href={param.path}>
        <Button
          variant="link"
          className={cn(
            "text-lg font-medium",
            "hover:no-underline hover:bg-muted"
          )}
        >
          {param.type === "code" ? (
            <ChevronRightSquare className="w-4 h-4" />
          ) : param.type == "game" ? (
            <Gamepad2 className="w-4 h-4" />
          ) : (
            <Wallet2 className="w-4 h-4" />
          )}

          {param.children}
        </Button>
      </Link>
    </>
  );
}
