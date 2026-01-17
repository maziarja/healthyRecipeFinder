"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter, useSearchParams } from "next/navigation";

function PrepTimeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const prepTime = searchParams.get("prepTime");
  const params = new URLSearchParams(searchParams.toString());

  return (
    <Select
      onValueChange={(val) => {
        if (val === "clear") {
          params.delete("prepTime");
        } else {
          params.set("prepTime", val);
        }
        const query = params.toString();
        router.push(query ? `/recipes?${query}` : "/recipes");
      }}
    >
      <SelectTrigger className="w-full" size="md">
        <SelectValue
          placeholder={prepTime ? prepTime + " minutes" : "Max Prep Time"}
        >
          {prepTime ? (
            <p className="text-preset-7 text-neutral-900">{prepTime} minutes</p>
          ) : (
            <p className="text-preset-7 text-neutral-900">Max Prep Time</p>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          <SelectItem value="0">
            <div
              className={`flex size-4 items-center justify-center rounded-full ${prepTime === "0" ? "border-2 border-neutral-900" : "border-border border"}`}
            >
              {prepTime === "0" && (
                <div className="size-2 rounded-full bg-neutral-900" />
              )}
            </div>
            0 minutes
          </SelectItem>

          <SelectItem value="5">
            {" "}
            <div
              className={`flex size-4 items-center justify-center rounded-full ${prepTime === "5" ? "border-2 border-neutral-900" : "border-border border"}`}
            >
              {prepTime === "5" && (
                <div className="size-2 rounded-full bg-neutral-900" />
              )}
            </div>
            5 minutes
          </SelectItem>
          <SelectItem value="10">
            {" "}
            <div
              className={`flex size-4 items-center justify-center rounded-full ${prepTime === "10" ? "border-2 border-neutral-900" : "border-border border"}`}
            >
              {prepTime === "10" && (
                <div className="size-2 rounded-full bg-neutral-900" />
              )}
            </div>
            10 minutes
          </SelectItem>
          <SelectItem value="clear">Clear</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default PrepTimeFilter;
