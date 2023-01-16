import Image from "next/image";

export default function Header() {
  return (
    <header className="">
      <h1>This is the Header</h1>
      <Image
        className="object-contain"
        // src="https://links.papareact.com/ua6"
        src="/next.svg"
        alt="Hulu Logo"
        width={280}
        height={100}
      />
    </header>
  );
}
