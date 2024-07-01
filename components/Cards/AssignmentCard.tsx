import Link from "next/link";
import CardImage from "./CardImage";

export default function AssignmentCard({ assignment }) {
  return (
    <div
      className={
        "rounded-lg border flex flex-col min-h-96 max-w-[22rem] bg-white shadow-md text-gray-700"
      }
    >
      <CardImage
        className="object-cover h-48 rounded-t-lg border-b"
        image={assignment.image}
        alt={"verkefna mynd"}
      />
      <div className="px-5 py-4 pb-5 flex flex-col justify-between flex-1">
        <div className="flex-1 overflow-hidden">
          <h2 className="text-xl font-bold mb-2">{assignment.title}</h2>
          <p
            className={
              "text-sm line-clamp-3 mb-5 leading-relaxed text-gray-500"
            }
          >
            {assignment.description}
          </p>
        </div>
        <Link
          href={assignment.url}
          target={"_blank"}
          aria-label={assignment.title}
          className="bg-violet-100 w-fit mt-2 text-violet-800 py-3 px-4 rounded-md hover:shadow-sm hover:bg-violet-200"
        >
          Skoða verkefni
        </Link>
      </div>
    </div>
  );
}
