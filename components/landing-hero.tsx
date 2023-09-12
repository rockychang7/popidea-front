import { cn } from "@/lib/utils";
import { NotoSerifSC } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LandingHero() {
  return (
    <div
      className={cn(
        NotoSerifSC.className,
        "w-full h-[360px] bg-brand-100",
        "dark:bg-background",
        "md:h-[420px]"
      )}
    >
      <div className="container max-w-[1200px] flex  justify-between mx-auto gap-48">
        <div
          className={cn(
            "flex flex-col pt-6 gap-y-6",
            "md:items-start md:justify-center md:basis-2/3 md:h-96 md:gap-y-4"
          )}
        >
          <div
            className={cn(
              "text-5xl text-left font-black transition-colors duration-300",
              "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-primary hover:to-blue-400"
            )}
          >
            <div>助力</div>
            <div>你的游戏与开发</div>
          </div>
          <div className="text-sm text-left font-semibold">
            popidea是一个专注于games和development相关的资源收集平台,如果你想了解游戏或者开发相关的东西，你都可以在本平台中进行探索.
          </div>
          <Button className="font-extrabold" size="lg">
            欢迎注册
          </Button>
        </div>
        <div
          className={cn(
            "hidden",
            "md:flex md:items-center md:basis-1/3 md:py-10 md:h-96 md:animate-hero-in"
          )}
        >
          <Image
            src="/hero/hero-1.png"
            alt="hero-image"
            width="300"
            height="100"
          />
        </div>
      </div>
    </div>
  );
}
