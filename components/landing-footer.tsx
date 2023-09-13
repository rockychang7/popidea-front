import Logo from "@/components/logo";
import Link from "next/link";

export default function LandingFooter() {
  return (
    <footer className="bg-brand-100 dark:bg-background w-full">
      <div className="container w-full mx-auto max-w-[1200px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full md:flex md:items-center md:justify-between">
          <div className="flex justify-center   md:justify-start">
            <Logo />
          </div>

          <div className="flex mx-auto   flex-col w-full  text-gray-500 text-center text-sm md:items-center md:gap-x-4 md:flex-row md:justify-end">
            <Link href="/disclaimer">
              <span className="underline">免责声明</span>
            </Link>

            <div className="mt-4  lg:mt-0 lg:text-right">
              Copyright &copy; 2023. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
