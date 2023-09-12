import Logo from "./logo";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { NotoSerifSC } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";
import { Gamepad2, ChevronRightSquare, Wallet2 } from "lucide-react";

interface Props {
  path: string;
  children: ReactNode;
  type: string;
}

function MainMenuLink(param: Props) {
  return (
    <>
      <Link href={param.path}>
        <Button
          variant="link"
          className={cn(
            "text-lg font-medium text-primary-foreground",
            "hover:no-underline hover:bg-muted",
            "dark:text-primary"
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

export default function LandingHeader() {
  return (
    <div
      className={cn(
        "border-b border-muted shadow-sm w-full z-50 sticky top-0 bg-brand-100",
        "dark:bg-background"
      )}
    >
      <div
        className={cn(
          "container flex py-2 justify-between items-center max-w-[1200px] h-[64px]  mx-auto",
          NotoSerifSC.className
        )}
      >
        <Logo />
        <div className={cn("hidden", "lg:flex lg:gap-1")}>
          <MainMenuLink path="/code" type="code">
            编程
          </MainMenuLink>
          <MainMenuLink path="/games" type="game">
            游戏
          </MainMenuLink>
          <MainMenuLink path="/pricing" type="pricing">
            价格
          </MainMenuLink>
        </div>
        <div className="flex gap-4">
          <div className={cn("hidden", "md:flex md:gap-2")}>
            <Button variant="outline" className="font-bold">
              登录
            </Button>
            <Button className="font-bold">注册</Button>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
