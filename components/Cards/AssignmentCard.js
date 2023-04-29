import Link from "next/link";

export default function AssignmentCard({ assignment }) {
  console.log(assignment);
  return (
    <Link href={assignment.url} target={"_blank"} aria-label={assignment.title}>
      <div
        className={
          "rounded-xl  flex flex-col justify-between p-8 h-36 w-96 hover:shadow-md hover:-translate-y-1 transition-all duration-400 text-white bg-gradient-to-br from-violet-500 to-violet-400"
        }
      >
        <div className="">
          <h2 className="font-bold text-3xl tracking-wide mb-2">
            {assignment.title}
          </h2>
          <p className={"tracking-wide text-sm text-violet-100"}>
            {assignment.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
