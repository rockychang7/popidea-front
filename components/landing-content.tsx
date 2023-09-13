import { NotoSerifSC } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge"

export default function LandingContent() {
  return (
    <div
      className={cn(
        NotoSerifSC.className,
        "w-full h-[1100px] pt-10  mx-auto flex flex-col justify-start gap-16 bg-background"
      )}
    >
      <div className="container max-w-[1200px]">
        <div
          className={cn(
            "flex flex-col items-center gap-y-4",
            "md:flex-row md:justify-between"
          )}
        >
          <div
            className={cn(
              "flex flex-col w-full   order-2",
              "md:self-end md:-order-1"
            )}
          >
            <div className={cn("text-xl font-semibold", "md:text-3xl")}>
            <Badge className="text-xl font-semibold md:text-2xl">Games</Badge>提供当前热门的游戏资讯
            </div>

            <div>
              <Button
                className="px-0 text-black font-extrabold text-md hover:text-primary dark:text-primary underline"
                variant="link"
                size="lg"
              >
                开始你的探索吧 <MoveRight />
              </Button>
            </div>
          </div>

          <div className="order-1">
            <Image
              src="/landing/landing-content-2.png"
              alt="游戏资源导向"
              width="380"
              height={100}
              className={cn("w-[500px] md:w-[700px]")}
            />
          </div>
        </div>
      </div>

      <div className="container border-b border-b-brand-100   max-w-[1200px]">
        <div
          className={cn(
            "flex flex-col items-center gap-y-4",
            "md:flex-row md:justify-between"
          )}
        >
          <div className="order-1">
            <Image
              src="/landing/landing-content-1.png"
              alt="游戏资源导向"
              width="380"
              height={100}
              className={cn("w-[280px] md:w-[320px]")}
            />
          </div>

          <div
            className={cn("flex flex-col  min-w-[50%] order-2", "md:self-end")}
          >
            <div className={cn("text-xl font-semibold", "md:text-3xl")}>
            <Badge className="text-xl font-semibold md:text-2xl">Develop</Badge>提供各类开发资源的介绍
            </div>

            <div>
              <Button
                className="px-0 text-black font-extrabold text-md underline  hover:text-primary dark:text-primary"
                variant="link"
                size="lg"
              >
                开始你的探索吧 <MoveRight />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center max-w-[1200px]">
        <div className="w-full text-lg font-bold">常见问题</div>
        <Accordion className="w-full" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>popidea这个网站是干嘛的?</AccordionTrigger>
            <AccordionContent>
              本网站主要收集开发以及电脑游戏两方面的内容。开发主要是针对beginner或者需要某方面技术的资源，可以在本站寻找对应的资源进行辅助学习。而游戏是对当前热门游戏进行资讯和相关资源的整理，也可以在本网站找到你想要的资源。
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>网站资源收费吗?</AccordionTrigger>
            <AccordionContent>
              对于资讯或者攻略以及相关介绍，所有用户都可以获取对应的信息。但是针对具体的开发资源或者游戏资源，会有具体的收费机制
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>网站资源会持续更新吗？</AccordionTrigger>
            <AccordionContent>
              是的，网站上的所有资源会不定时的进行更新。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
