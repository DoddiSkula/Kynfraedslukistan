import Link from "next/link";
import classNames from "classnames";

export default function CourseCard({ course }) {
  const categoryStr = course.category ? course.category[0] : null;
  return (
    <Link
      href={`/kennsluefni/${course.slug}`}
      target={"_self"}
      aria-label={course.title}
    >
      <div
        className={classNames(
          "rounded-xl  flex flex-col justify-between p-8 h-80 bg-gradient-to-br hover:shadow-2xl hover:scale-105 transition-all text-white",
          {
            "from-blue-500 to-sky-300": categoryStr === "samskipti",
            "from-violet-500 to-purple-300": categoryStr === "sambönd",
            "from-pink-500 to-rose-300": categoryStr === "kynlíf",
          }
        )}
      >
        <p className="tracking-widest font-semibold text-white/80 uppercase text-sm">
          {categoryStr}
        </p>
        <div className="mb-3 w-[17rem]">
          <h2 className="font-bold text-3xl tracking-wide mb-2 break-words">
            {course.title}
          </h2>
          <p
            className={classNames(
              "tracking-wide text-sm break-words text-ellipsis overflow-hidden line-clamp-3",
              {
                "text-blue-100": categoryStr === "samskipti",
                "text-purple-100": categoryStr === "sambönd",
                "text-pink-100": categoryStr === "kynlíf",
              }
            )}
          >
            {course.description}
          </p>
        </div>
        <div className="flex gap-4 text-sm text-white/80">
          {course.hlekkir?.length > 0 && (
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>

              {course.hlekkir?.length}
            </div>
          )}
          {course.verkefni?.length > 0 && (
            <div className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              {course.verkefni?.length}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
