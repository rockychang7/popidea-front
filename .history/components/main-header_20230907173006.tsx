import Logo from "./logo";
import MainMenuLink from "./main-menu-button";
import { ModeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { NotoSerifSC } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function MainHeader() {
  return (
    <div className="border-b border-primary-fore-400 w-full z-50 sticky top-0 bg-background">
      <div
        className={cn(
          "container flex py-2 justify-between items-center max-w-[1200px] h-[64px]   mx-auto",
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
