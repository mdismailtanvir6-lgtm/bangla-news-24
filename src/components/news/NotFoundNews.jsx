import { FileQuestion } from "lucide-react";

export default function NotFoundNews({
  title = "News Not Found",
  description = "The news you are looking for could not be found.",
}) {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center px-4 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
        <FileQuestion size={32} strokeWidth={1.5} className="text-gray-500" />
      </div>

      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>

      <p className="mt-2 max-w-md text-sm text-gray-500">{description}</p>
    </div>
  );
}
