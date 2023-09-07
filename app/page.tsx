import MainFooter from "@/components/main-footer";
import MainHeader from "@/components/main-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] flex flex-col mx-auto">
        <MainHeader />
        <div className="container max-w-[1200px] h-[100px] mx-auto flex flex-col md:flex-row justify-between pt-4">
          <div>内容介绍</div>
          <div>
            <div className="flex flex-col">
              
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
