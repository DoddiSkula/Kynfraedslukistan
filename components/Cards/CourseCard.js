import Link from "next/link";
import classNames from "classnames";

export default function CourseCard({ course }) {
  const categoryStr = course.category ? course.category[0] : null;
  console.log(course);
  return (
    <Link
      href={`/kennsluefni/${course.slug}`}
      target={"_self"}
      aria-label={course.title}
    >
      <div
        className={classNames(
          "rounded-xl  flex flex-col justify-between p-8 h-96  bg-gradient-to-br  hover:shadow-2xl hover:scale-105 transition-all text-white",
          {
            "from-teal-500 to-teal-400": categoryStr === "samskipti",
            "from-indigo-500 to-indigo-400": categoryStr === "sambönd",
            "from-pink-500 to-pink-400": categoryStr === "kynlíf",
          }
        )}
      >
        <p className="tracking-widest text-white/60 uppercase text-sm">
          {categoryStr}
        </p>
        <div className="mb-3">
          <h2 className="font-bold text-3xl tracking-wide mb-2 break-words">
            {course.title}
          </h2>
          <p
            className={classNames("tracking-wide text-sm break-words", {
              "text-teal-50": categoryStr === "samskipti",
              "text-indigo-50": categoryStr === "sambönd",
              "text-pink-50": categoryStr === "kynlíf",
            })}
          >
            {course.description}
          </p>
        </div>
        <div className="flex gap-2 tracking-wide text-sm text-white/60">
          <p>{course.hlekkir?.length ?? 0} hlekkir</p>
          <p>{course.verkefni?.length ?? 0} verkefni</p>
        </div>
      </div>
    </Link>
  );
}
