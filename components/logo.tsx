import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        className="rounded-sm"
        width="165"
        height="80"
        src="/logo/logo.png"
        alt="logo"
      />
    </Link>
  );
}
