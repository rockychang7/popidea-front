import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="rounded-sm"
        width="160"
        height="70"
        src="/logo/logo.png"
        alt="logo"
      />
    </Link>
  );
}
