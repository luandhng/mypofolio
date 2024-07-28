import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export const LinkSite = ({ text, href }: Props) => {
  return (
    <Link
      className="text-green-500 border-b w-fit border-green-800"
      target="_blank"
      href={href}
    >
      {text}
    </Link>
  );
};
