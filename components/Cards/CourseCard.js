import classNames from "classnames";
import Link from "next/link";

export default function CourseCard({ course, colorIndex = 1 }) {
  return (
    <Link
      href={`/kennsluefni/${course.slug}`}
      target={"_self"}
      aria-label={course.title}
      className="outline-purple-600 outline-offset-2 outline-2"
    >
      <div
        className={classNames(
          "rounded-xl flex flex-col justify-between h-60 p-7 transition-all duration-[400ms] bg-gradient-to-br hover:bg-gradient-to-b hover:scale-105 text-white",
          {
            "from-blue-500 to-sky-400": [3, 5].includes(colorIndex),
            "from-violet-500 to-purple-400": [2, 4].includes(colorIndex),
            "from-pink-500 to-rose-400": [1, 6].includes(colorIndex),
          }
        )}
      >
        <div>
          <h2
            className={classNames("font-bold text-2xl whitespace-nowrap mb-1")}
          >
            {course.title}
          </h2>
          <p
            className={classNames(
              "text-sm break-words text-ellipsis overflow-hidden line-clamp-3 leading-6 mb-6 text-white/90 w-[30ch]"
            )}
          >
            {course.description}
          </p>
        </div>
        <div className="flex items-center gap-3 text-xs text-white/80">
          {course.hlekkir?.length > 0 && (
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
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
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
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
