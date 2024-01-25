import Link from "next/link";

const Footer = () => {
  return (
    <div className="font-kanit py-8 w-full text-xl md:text-2xl bg-white bg-opacity-60">
      <div className="max-w-3xl mx-auto text-center md:text-right italic">
        Created by{" "}
        <Link
          className="font-kanit"
          href={"https://jxjurkiewicz.github.io"}
          target="_blank"
        >
          Jakub Jurkiewicz
        </Link>
      </div>
    </div>
  );
};

export default Footer;
