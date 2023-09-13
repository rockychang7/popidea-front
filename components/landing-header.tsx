"use client";

import Logo from "./logo";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { NotoSerifSC } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";
import { Gamepad2, ChevronRightSquare, Wallet2 } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

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
            "hover:no-underline hover:bg-primary",
            "dark:text-white dark:hover:text-black"
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

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4 bg-muted">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default function LandingHeader() {
  const { isLoaded, isSignedIn, user } = useUser();

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
          {!isLoaded ? (
             <></>
          ) : (
            <div className={cn("hidden", "md:flex md:gap-2 md:items-center")}>
              {isSignedIn ? (
                <div>
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <>
                  {console.log(isSignedIn)}
                  <Link href="/routes/sign-in">
                    <Button variant="outline" className="font-bold">
                      登录
                    </Button>
                  </Link>
                  <Link href="/routes/sign-up">
                    <Button className="font-bold">注册</Button>
                  </Link>
                </>
              )}
            </div>
          )}

          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
