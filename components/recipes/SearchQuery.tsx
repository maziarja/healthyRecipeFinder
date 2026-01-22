"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function SearchQuery() {
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get("query");
  const [query, setQuery] = useState(queryFromUrl) ?? "";
  const params = new URLSearchParams(searchParams.toString());
  const router = useRouter();

  useEffect(() => {
    setQuery(queryFromUrl);
  }, [queryFromUrl, setQuery]);

  return (
    <div className="relative w-full">
      <SearchIcon className="text-muted-foreground absolute top-1/2 left-3 size-5 -translate-y-1/2" />
      <Input
        value={query || ""}
        onChange={(e) => {
          setQuery(e.target.value);
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
