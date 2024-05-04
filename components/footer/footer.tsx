import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { label: "Terms & Conditions", href: "/" },
    { label: "Privacy", href: "/" },
    { label: "Community", href: "/" },
    { label: "Feedback", href: "/" },
  ];

  return (
    <footer className="flex justify-center border-dashed border-t-2 border-black text-black bg-yellow-400">
      <div className="w-screen px-12 md:px-36 py-12">
        <div className="flex flex-col text-center justify-center">
          <div className="flex flex-row justify-center">
            <Image
              src="/icons/bee.png"
              alt="bee"
              width={100}
              height={100}
              sizes="100vw"
              className="max-w-[35px]"
            />

            <div className="flex items-center font-Patua text-xl font-bold ml-2">
              <Link href={"/"}>Hivework</Link>
            </div>
          </div>
          <div className="text-xs text-zinc-700 mt-4">
            Where freelancers find opportunities!
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 flex justify-center mt-4">
          <nav className="flex flex-wrap mt-12 md:mt-3 justify-center">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-xs hover:text-gray-300 px-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="col-span-2 flex justify-center items-center text-xs mt-16 md:mt-8">
          © 2024 Hivework. All rights reserved
        </div>
      </div>
    </footer>
  );
}
