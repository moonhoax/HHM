import Link from "next/link";
import Image from "next/image";
import logoWord from "@/public/images/HHMedia_Logo_Word.png";

export default function LogoWord() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="HH">
      <Image src={logoWord} alt="HH Logo" width={280} height={32} />
    </Link>
  );
}
