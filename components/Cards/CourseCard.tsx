import {
  BedDoubleIcon,
  Clapperboard,
  HeartCrackIcon,
  HeartHandshakeIcon,
  HeartIcon,
  MessageCircleMoreIcon,
  ThumbsUpIcon,
} from "lucide-react";
import Link from "next/link";

const iconMap = {
  sambond: (
    <div className="size-11 rounded-full bg-blue-100 flex items-center justify-center">
      <HeartHandshakeIcon className="size-5 text-blue-700" />
    </div>
  ),
  ofbeldi: (
    <div className="size-11 rounded-full bg-pink-100 flex items-center justify-center">
      <HeartCrackIcon className="size-5 text-pink-700" />
    </div>
  ),
  samthykki: (
    <div className="size-11 rounded-full bg-teal-100 flex items-center justify-center">
      <ThumbsUpIcon className="size-5 text-teal-700" />
    </div>
  ),
  kynlif: (
    <div className="size-11 rounded-full bg-fuchsia-100 flex items-center justify-center">
      <BedDoubleIcon className="size-5 text-fuchsia-700" />
    </div>
  ),
  samskipti: (
    <div className="size-11 rounded-full bg-orange-100 flex items-center justify-center">
      <MessageCircleMoreIcon className="size-5 text-orange-700" />
    </div>
  ),
  "klam-og-raunveruleiki": (
    <div className="size-11 rounded-full bg-sky-100 flex items-center justify-center">
      <Clapperboard className="size-5 text-sky-700" />
    </div>
  ),
};

export default function CourseCard({ course }) {
  return (
    <Link
      href={`/kennsluefni/${course.slug}`}
      target={"_self"}
      aria-label={course.title}
      className={
        "rounded-xl flex items-center gap-6 hover:outline outline-1 border  shadow-purple-800/5 outline-purple-400 bg-white border-purple-100 p-6 transition-all"
      }
    >
      {iconMap[course.slug]}
      <div>
        <h2 className={"font-semibold text-lg whitespace-nowrap"}>
          {course.title}
        </h2>
      </div>
    </Link>
  );
}
