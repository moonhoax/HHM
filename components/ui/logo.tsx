import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/HHMedia_hand.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="HH">
      <Image src={logo} alt="HH Logo" width={32} height={32} />
    </Link>
  );
}
