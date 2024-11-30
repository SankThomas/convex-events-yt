import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="mx-auto mt-10 max-w-3xl py-20 text-center">
      <Loader className="mx-auto block size-9 animate-spin" />
    </div>
  );
}
