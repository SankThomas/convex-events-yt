import { CardDescription, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl space-y-2 px-2 py-20 text-center">
      <CardTitle>404 | Page not found</CardTitle>
      <CardDescription>The requested page could not be found</CardDescription>
    </div>
  );
}
