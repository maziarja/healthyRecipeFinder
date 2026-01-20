"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useRouter, useSearchParams } from "next/navigation";

function SearchQuery() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();
  return (
    <div className="relative w-full">
      <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2" />
      <Input
        onChange={(e) => {
          if (e.target.value === "") {
            params.delete("query");
          } else {
            params.set("query", e.target.value);
          }

          const query = params.toString();
          router.push(query ? `/recipes?${query}` : "/recipes", {
            scroll: false,
          });
        }}
        type="text"
        placeholder="Search by name or ingredient..."
        className="pl-9"
      />
    </div>
  );
}

export default SearchQuery;
