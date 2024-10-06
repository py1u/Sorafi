import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="my-4 flex flex-row items-center justify-center gap-x-20 rounded-full bg-sorafi-cinder-600/25 px-20 py-3 font-oxanium text-xl text-white">
      <Link href="/">Explore</Link>
      <Link href="/">Learn</Link>
      <Link href="/">Developers</Link>
      <Link href="/">Market</Link>
      <Link href="/">About</Link>
    </nav>
  );
};

export default Navigation;
