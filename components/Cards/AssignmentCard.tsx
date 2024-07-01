import Link from "next/link";
import CardImage from "./CardImage";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function AssignmentCard({ assignment }) {
  return (
    <Card className="max-w-[350px] border-purple-200 bg-purple-50 flex flex-col">
      <CardHeader>
        <CardImage
          className="object-cover border rounded-md max-h-[200px] w-full"
          image={assignment.image}
          alt={"verkefna mynd"}
        />
      </CardHeader>
      <CardContent className="mb-2">
        <CardTitle>{assignment.title}</CardTitle>
        <CardDescription className="line-clamp-4">
          {assignment.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex-1 flex flex-col justify-end">
        <Link
          href={assignment.url}
          target={"_blank"}
          aria-label={assignment.title}
          className="w-full"
        >
          <Button variant="secondary" className="w-full">
            Skoða verkefni
            <ExternalLink className="ml-2 size-3.5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
