import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={535}
        height={108}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
